import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertasServices: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasServices.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((descricao: any) =>{
      this.ondeFica = descricao
    })
  }

}
