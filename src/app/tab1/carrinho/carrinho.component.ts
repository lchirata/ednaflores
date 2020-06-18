import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Planta } from 'src/app/models/Planta';
import { Carrinho } from 'src/app/models/Carrinho';
import { PlantasService } from '../../services/plantas.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {

  @Input() carrinho: Carrinho;

  constructor(
    public modalController: ModalController,
    public plantasService: PlantasService,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    console.log(this.carrinho);
  }

  fecharResumo() {
    this.modalController.dismiss({
      dismissed: true
    })
  }

  excluirProduto(plantas: Planta) {
    console.log(plantas);
    this.carrinho.excluirDoCarrinho(plantas);
  }

  comprar() {
    const compras = this.carrinho.resumoCompra();
    
    this.fecharResumo();
    this.presentToast();
    
    // this.produtosService.comprar(compras).subscribe(response => {
    // console.log('OK')
    // })
    
    }

  async presentToast() {
      const toast = await this.toastController.create({
      message: 'Compra efetuada!',
      duration: 2000
      });
      toast.present();
      }

}
