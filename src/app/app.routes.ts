import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {RestauranteComponent} from './restaurante/restaurante.component'
import {DiversaoComponent} from './diversao/diversao.component'
import {OfertaComponent} from './oferta/oferta.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurante', component: RestauranteComponent},
    {path: 'diversao', component: DiversaoComponent},
    {path: 'oferta', component: OfertaComponent},
    {path: 'oferta/:id', component: OfertaComponent}
]
