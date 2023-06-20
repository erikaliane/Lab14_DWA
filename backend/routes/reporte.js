const express = require('express');
const router = express.Router();
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const Vuelo = require('../models/Vuelo');

// Ruta para generar el reporte de aviones
router.get('/avion', async (req, res) => {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  try {    
    const vuelos = await Vuelo.find();
    const docDefinition = { 
      content: [
        { text: 'Reporte de Vuelos', style: 'header' },
        { text: '\n' },
        {
          table: {
          headerRows: 1,
          widths: ['*', '*' , '*' , '*' , '*' , '*'],
          body:  [[
                { text: 'Nº Vuelo', bold: true, fillColor: '#008f39', color: '#ffffff' },
                { text: 'Origen', bold: true, fillColor: '#008f39', color: '#ffffff' },
                { text: 'Destino', bold: true, fillColor: '#008f39', color: '#ffffff' },
                { text: 'Fecha', bold: true, fillColor: '#008f39', color: '#ffffff' },
                { text: 'Avion', bold: true, fillColor: '#008f39', color: '#ffffff' },
                { text: 'Piloto', bold: true, fillColor: '#008f39', color: '#ffffff' },
              ],]
          },},],
        styles: {
        header: {
          alignment: 'center',
          fontSize: 18,
          bold: true,
          decoration: 'underline',
          color: '#008f39',
          margin: [0, 0, 0, 10],},
        },};

        
    for (let i = 0; i < vuelos.length; i++) {
      const vuelo = vuelos[i];
      

      const formattedFecha = formatDate(vuelo.fecha);
      docDefinition.content[2].table.body.push([vuelo.nvuelo , vuelo.origen ,vuelo.destino , formattedFecha , vuelo.piloto, vuelo.avion
      ]);}

    const pdfDoc = pdfMake.createPdf(docDefinition);  

    pdfDoc.getBuffer((buffer) => {
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename=vuelos.pdf',
        'Content-Length': buffer.length,
    });

    res.end(buffer);});

}catch (error) {  
  console.error('Error al generar el reporte', error);  
  res.status(500).json({ error: 'Error al generar el reporte' });
}});

module.exports = router;
