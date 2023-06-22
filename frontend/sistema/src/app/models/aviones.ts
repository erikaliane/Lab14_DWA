export class Aviones {
    _id?: string;
    codigo: string;
    tipo: string;

    constructor(codigo: string, tipo:string){
        this.codigo = codigo;
        this.tipo = tipo;       
    }
}