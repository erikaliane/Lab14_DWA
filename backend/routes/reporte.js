const express = require('express');
const router = express.Router();
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Avion = require('../models/Aviones');

// Ruta para generar el reporte de aviones
router.get('/avion', async (req, res) => {
  try {
    const aviones = await Avion.find();

    const docDefinition = {
      content: [
        { text: 'Reporte de Aviones', style: 'header' },
        { text: '\n' },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*'],
            body:  [
              [
                { text: 'Código', bold: true, fillColor: '#008f39', color: '#ffffff' },
                { text: 'Tipo', bold: true, fillColor: '#008f39', color: '#ffffff' },
              ],
          ]
          },
        },
      ],
      styles: {
        header: {
          alignment: 'center',
          fontSize: 18,
          bold: true,
          decoration: 'underline',
          color: '#008f39',
          margin: [0, 0, 0, 10], 
        },
      },
    };

    for (let i = 0; i < aviones.length; i++) {
      const avion = aviones[i];
      docDefinition.content[2].table.body.push([avion.codigo , avion.tipo]);
  }


    const pdfDoc = pdfMake.createPdf(docDefinition);  // Fix: Use pdfMake.createPdfKitDocument instead of printer.createPdfKitDocument
    pdfDoc.getBuffer((buffer) => {
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename=aviones.pdf',
        'Content-Length': buffer.length,
      });

      res.end(buffer);
    });
} catch (error) {
  console.error('Error al generar el reporte', error);
  res.status(500).json({ error: 'Error al generar el reporte' });
}
});


module.exports = router;
