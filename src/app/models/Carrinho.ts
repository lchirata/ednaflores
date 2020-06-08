import { Planta } from './Planta';
import { ChildActivationStart } from '@angular/router';

export class Carrinho {

    private plantas: Array<Planta>

        constructor() {
        this.plantas = Array<Planta>();
    }

    adicionarNoCarrinho(planta: Planta) {
        const plantaExiste =  this.plantas.find(item => item.id === planta.id);

        if (plantaExiste){
            plantaExiste.quantidade += 1;
            console.log(plantaExiste.quantidade);
        } else {
            planta.quantidade = 1;
            this.plantas.push(planta);  
        }
    }

    excluirDoCarrinho(planta: Planta) {
        const produtoExiste = this.plantas.find(item => item.id === planta.id)

        if (produtoExiste.quantidade > 1){
            produtoExiste.quantidade -= 1;
        }else{
            this.plantas = this.plantas.filter(item => item.id != planta.id);
        }   
    }

    resumoCompra() {
        return this.plantas;
    }

    numeroDeProdutos() {
        return this.plantas.length;
    }
    
    valorTotal(){
        // const total = this.produtos.reduce((acc, cur) => {
        //     return acc + (cur.preco * cur.quantidade)
        //     }, 0)
        //     return total.toFixed(2);
        let total = 0;
        for(let planta of this.plantas){
            const preco = planta.preco;
            const quantidade = planta.quantidade;
            total += (preco * quantidade);
        }
        return total.toFixed(2);
    }
}

