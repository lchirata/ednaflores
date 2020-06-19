import { Component, OnInit } from '@angular/core';
import { Planta } from '../models/Planta';
import { Carrinho } from '../models/Carrinho';
import { Favorito } from '../models/Favotito';
import { Detalhe } from '../models/Detalhe';
import { ModalController } from '@ionic/angular';
import { PlantasService } from '../services/plantas.service';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { ProdutoComponent } from './produto/produto.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  plantas = new Array<Planta>();
  carrinho = Carrinho.getInstance();
  favorito = new Favorito();
  detalhe = new Detalhe();

  constructor(

    public plantasService: PlantasService,
    public modalController: ModalController,
    public modalFavorito: ModalController,

  ) { }


  ngOnInit() {
    this.plantasService.listarPlantas().subscribe(resultado => {
      this.plantas = resultado;
    })
  }

  adicionarNoCarrinho(planta: Planta, buque: Planta) {
    this.carrinho.adicionarNoCarrinho(planta, buque);
  }

  teclaDigita(event: any) {
    console.log(event.detail.value);
  }

  async resumoCompra() {
    const modal = await this.modalController.create({
      component: CarrinhoComponent,
      cssClass: 'modal',
      componentProps: {
        carrinho: this.carrinho,
      }
    });
    return await modal.present();
  }

  adicionarNoFavorito(planta: Planta) {
    this.favorito.adicionarNoFavorito(planta);
  }

  async resumoFavorito() {
    const modalfav = await this.modalFavorito.create({
      component: FavoritoComponent,
      cssClass: 'modal',
      componentProps: {
        favorito: this.favorito,
      }
    });
    return await modalfav.present();
  }

  async detalheProduto(planta: Planta) {

    console.log(this.detalhe.adicionarNoDetalhe);
    const modal = await this.modalController.create({
      component: ProdutoComponent,
      cssClass: 'modal',
      componentProps: {
        produto: this.plantas,
      }
    });
    return await modal.present();
  }
}
