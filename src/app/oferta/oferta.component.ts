import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {OfertasService} from '../ofertas.service'
import { Oferta } from 'app/shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {
  
  private tempoOnservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription
  public oferta: Oferta

  constructor(
    private route: ActivatedRoute, private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((ofertas: Oferta) =>{
      this.oferta = ofertas
    })

    let tempo = Observable.interval(2000)

    this.tempoOnservableSubscription = tempo.subscribe((intervalo: number) =>{
      console.log(intervalo)
    })

    //Observable (Observavel)
    let meuObservableTeste = Observable.create((observer: Observer<number>) =>{
      observer.next(1)
      observer.next(3)
      observer.complete()
      observer.next(3)
    })

    //Observable (Observador)
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
      (resultado: number) => console.log(resultado + 10),
      (erro: string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')
    )
  }

  ngOnDestroy(): void {
    this.meuObservableTesteSubscription.unsubscribe()
    this.tempoOnservableSubscription.unsubscribe()
  }

}
