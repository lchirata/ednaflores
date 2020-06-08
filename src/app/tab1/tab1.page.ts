import { Component, OnInit } from '@angular/core';
import { Planta } from '../models/Planta';
import { PlantasService } from '../services/plantas.service';
import { Carrinho } from '../models/Carrinho';
import { ModalController } from '@ionic/angular';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { Favorito } from '../models/Favotito';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  plantas = new Array<Planta>();
  carrinho = new Carrinho();
  favorito = new Favorito();

  constructor(

    public plantasService: PlantasService,
    public modalController: ModalController

  ) { }


  ngOnInit() {
    this.plantasService.listarPlantas().subscribe(resultado => {
      this.plantas = resultado;
    })
  }

  adicionarNoCarrinho(planta: Planta) {
    this.carrinho.adicionarNoCarrinho(planta);
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

  async resumofavoritar() {
    const modalfavorito  = await this.modalController.create({
      component: FavoritoComponent,
      cssClass: 'modal',
      componentProps: {
        carrinho: this.carrinho,
      }
    });
    return await modalfavorito.present();
  }

  adicionarNoFavorito(planta: Planta) {
    this.favorito.adicionarNoFavorito(planta);
  }
}

