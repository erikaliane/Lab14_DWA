export class Pilotos {
    _id?: string;
    codigo: string;
    nombre: string;
    hvuelo: string;

    constructor(codigo: string, nombre: string, hvuelo: string){
        this.codigo = codigo;
        this.nombre = nombre;
        this.hvuelo = hvuelo;       
    }
}