import { Planta } from './Planta';
import { Carrinho } from './Carrinho';

export class Favorito {

    private plantas: Array<Planta>;
    private carrinho: Carrinho;

    constructor() {

        this.plantas = Array<Planta>();
        this.carrinho = new Carrinho();
    }

    adicionarNoFavorito(planta: Planta) {
        const plantaExiste =  this.plantas.find(item => item.id === planta.id);

        if (plantaExiste){
            plantaExiste.quantidade = 1;
            console.log(plantaExiste.quantidade);
        } else {
            planta.quantidade = 1;
            this.plantas.push(planta);  
        }
    }

    numeroDeFavoritos() {
        return this.plantas.length;
    }

    excluirDoFavorito(planta: Planta) {
        const produtoExiste = this.plantas.find(item => item.id === planta.id)

        if (produtoExiste.quantidade > 1){
            produtoExiste.quantidade -= 1;
        }else{
            this.plantas = this.plantas.filter(item => item.id != planta.id);
        }   
    }

  
    resumoFavorito() {
        return this.plantas;
    }

    testes(planta: Planta) {

        console.log("adiciona carrinho");
    //     const plantaExiste =  this.plantas.find(item => item.id === planta.id);

    //     if (plantaExiste){
    //         plantaExiste.quantidade += 1;
    //         console.log(plantaExiste.quantidade);
    //     } else {
    //         planta.quantidade = 1;
    //         this.plantas.push(planta);  
    //   }
    }

}