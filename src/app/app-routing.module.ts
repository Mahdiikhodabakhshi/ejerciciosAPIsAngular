import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './pages/agents/agents.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CharacterComponent } from './pages/character/character.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo:'/Agents',
    pathMatch:'full'
  },
  {
    path: 'Agents',
    component: AgentsComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'weapons',
    component: WeaponsComponent
  },
{
  path:'**',
  redirectTo:'/Agents'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
