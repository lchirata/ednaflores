import { Component, OnInit } from '@angular/core';
import { Planta } from '../models/Planta';
import { PlantasService } from '../services/plantas.service';
import { Carrinho } from '../models/Carrinho';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  plantas = new Array<Planta>();
  carrinho = new Carrinho();

  constructor(
    
    public plantasService: PlantasService

    ) {}


  ngOnInit(){
    this.plantasService.listarPlantas().subscribe(resultado => {
    this.plantas = resultado;
    })
  }

  adicionarNoCarrinho(planta: Planta){
    this.carrinho.adicionarNoCarrinho(planta);
  }
  
  teclaDigita(event: any){
    console.log(event.detail.value);
  }

}