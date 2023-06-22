export class Vuelos {

    _id?: string;
    nvuelo: number;
    origen: string;
    destino: string;
    fecha: string;
    avion: string;
    piloto: string;


    constructor(nvuelo: number, origen: string, 
        destino: string, fecha: string, 
        avion: string, piloto: string){

        this.nvuelo = nvuelo;
        this.origen = origen;
        this.destino = destino;
        this.fecha = fecha;
        this.avion = avion;
        this.piloto = piloto;

    }
}