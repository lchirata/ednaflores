import { Planta } from './Planta';

export class Detalhe {

    private plantas: Array<Planta>;

    constructor() {

        this.plantas = Array<Planta>();

    }

    adicionarNoDetalhe(planta: Planta) {
        const plantaExiste =  this.plantas.find(item => item.id === planta.id);
        console.log(plantaExiste.id);

    }
    
}
