import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlantasService } from '../../services/plantas.service';
import { ToastController } from '@ionic/angular';
import { Favorito } from 'src/app/models/Favotito';
import { Planta } from 'src/app/models/Planta';


@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss'],
})
export class FavoritoComponent implements OnInit {

  @Input() favorito: Favorito;

   constructor(
    public modalfavorito: ModalController,
    public plantasService: PlantasService,
    public toastController: ToastController,
    
  ) { }

  
  ngOnInit() {
    console.log(this.favorito);
  }

  fecharFavoritos() {
    this.modalfavorito.dismiss({
      dismissed: true
    })
  }

  excluirFavorito(plantas: Planta){
    this.favorito.excluirDoFavorito(plantas);
  }

  teste(plantas: Planta){
    //console.log("teste");
    this.favorito.testes(plantas);
  }  
}
