import { Planta } from './Planta';
export class Favorito {

    private favorito: Array<Planta>;
    constructor() {

        this.favorito = Array<Planta>();
    }

    adicionarNoFavorito(planta: Planta) {
        const plantaExiste =  this.favorito.find(item => item.id === planta.id);

        if (plantaExiste){
            plantaExiste.quantidade = 1;
            console.log(plantaExiste.quantidade);
        } else {
            planta.quantidade = 1;
            this.favorito.push(planta);  
        }
    }

    numeroDeFavoritos() {
        return this.favorito.length;
    }

    excluirDoFavorito(planta: Planta) {
        const produtoExiste = this.favorito.find(item => item.id === planta.id)

        if (produtoExiste.quantidade > 1){
            produtoExiste.quantidade -= 1;
        }else{
            this.favorito = this.favorito.filter(item => item.id != planta.id);
        }   
    }

}