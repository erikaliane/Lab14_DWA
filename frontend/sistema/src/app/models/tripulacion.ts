export class Tripulacion {
    _id?: string ;
    codigo: string;
    nombre: string ;
    vuelo: string ;

    constructor(codigo: string, nombre:string, vuelo:string){
        this.codigo = codigo;
        this.nombre = nombre;
        this.vuelo = vuelo;
    }

}