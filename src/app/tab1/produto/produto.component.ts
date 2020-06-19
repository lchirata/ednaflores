import { Component, OnInit, Input } from '@angular/core';
import { Planta } from 'src/app/models/Planta';
import { Detalhe } from 'src/app/models/Detalhe';
import { Buque } from 'src/app/models/Buque';
import { ModalController } from '@ionic/angular';
import { Carrinho } from 'src/app/models/Carrinho';
import { PlantasService } from '../../services/plantas.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {

  planta = new Planta();
  carrinho = Carrinho.getInstance();
  detalhe = new Detalhe();

  constructor(

    public modalController: ModalController,
    public plantasService: PlantasService,
    public toastController: ToastController,

  ) { }

ngOnInit() {

  }

  fecharDetalhe() {
    this.modalController.dismiss({
      dismissed: true
    })
  }

  exibirDetalhe(planta: Planta){
    this.detalhe.adicionarNoDetalhe(planta);
  }

}
