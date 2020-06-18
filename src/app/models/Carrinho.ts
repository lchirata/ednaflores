import { Planta } from './Planta';
import { Buque } from './Buque'
import { ChildActivationStart } from '@angular/router';

export class Carrinho {

    private plantas: Array<Planta>
    private buque: Array<Buque>
    private static instance: Carrinho;

    constructor() {
        this.plantas = Array<Planta>();
        this.buque = Array<Buque>();
    }

    public static getInstance(): Carrinho {
        if (!Carrinho.instance) {
            Carrinho.instance = new Carrinho();
        }

        return Carrinho.instance;
    }

    adicionarNoCarrinho(planta: Planta, buque: Buque) {
        const plantaExiste = this.plantas.find(item => item.id === planta.id);
        const buqueExiste = this.buque.find(item => item.id === buque.id);

        if (plantaExiste) {
            plantaExiste.quantidade += 1;
            console.log(plantaExiste.quantidade);
        } else {
            planta.quantidade = 1;
            this.plantas.push(planta);
        }

        if (buqueExiste) {
            buqueExiste.quantidade += 1;
            console.log(buqueExiste.quantidade);
        } else {
            buque.quantidade = 1;
            this.buque.push(buque);
        }

    }
    excluirDoCarrinho(planta: Planta) {
        const produtoExiste = this.plantas.find(item => item.id === planta.id)

        if (produtoExiste.quantidade > 1) {
            produtoExiste.quantidade -= 1;
        } else {
            this.plantas = this.plantas.filter(item => item.id != planta.id);
        }
    }
    resumoCompra() {
        const resumo = this.plantas && this.buque;
        return [...this.buque, ...this.plantas];
    }
    numeroDeProdutos() {
        return this.plantas.length + this.buque.length;
    }
    valorTotal() {
        let total = 0;
        let totalp = 0;
        let totalb = 0;

        for (let planta of this.plantas) {
            const preco = planta.preco;
            const quantidade = planta.quantidade;
            totalp += (preco * quantidade);
        }
        for (let buque of this.buque) {
            const precobuque = buque.preco;
            const quantidadebuque = buque.quantidade;
            totalb += (precobuque * quantidadebuque);
        }
        total = totalp + totalb;

        return total.toFixed(2);
    }

}

