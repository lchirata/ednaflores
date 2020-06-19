import { Component, OnInit } from '@angular/core';
import { PlantasService } from '../services/plantas.service';
import { Buque } from '../models/Buque';
import { Carrinho } from '../models/Carrinho';
import { Planta } from '../models/Planta';
import { ModalController } from '@ionic/angular';
import { CarrinhoComponent } from '../tab1/carrinho/carrinho.component';
import { FavoritoComponent } from '../tab1/favorito/favorito.component';
import { ProdutoComponent } from '../tab1/produto/produto.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  buques = new Array<Buque>();
  plantas = new Array<Planta>();
  carrinho = Carrinho.getInstance();

  constructor(
    public plantasService: PlantasService,
    public modalController: ModalController,
    public modalFavorito: ModalController,
  ) {}

  ngOnInit() {
    this.plantasService.listarBuques().subscribe(resultado => {
      this.buques = resultado;
    })
  }

  adicionarNoCarrinho(planta: Planta, buque: Buque) {
    console.log("adicionando no carrinho")
    this.carrinho.adicionarNoCarrinho(planta, buque);
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

  async detalheProduto() {

    console.log("vitrine");
    const modal = await this.modalController.create({
      component: ProdutoComponent,
      cssClass: 'modal',
      componentProps: {
        planta: this.plantas,
      }
    });
    return await modal.present();
  }


}
