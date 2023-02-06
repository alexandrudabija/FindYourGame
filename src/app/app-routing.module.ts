import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PcComponent } from './pages/pc/pc.component';
import { XboxComponent } from './pages/xbox/xbox.component';
import { PlayStationComponent } from './pages/play-station/play-station.component';
import { OtherComponent } from './pages/other/other.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { PcComponent } from './pc/pc.component';
// import { XboxComponent } from './xbox/xbox.component';
// import { PlayStationComponent } from './play-station/play-station.component';
// import { OtherComponent } from './other/other.component'






const routes: Routes = [ {path:'index' ,component :IndexComponent, title:'index', pathMatch: 'full' },
{path:'pc' ,component :PcComponent, title:'pc'},
{path:'xbox' ,component :XboxComponent, title:'xbox'},
{path:'playstation' ,component :PlayStationComponent, title:'playstation'},
{path:'other' ,component :OtherComponent, title:'other'},
{ path: '**' ,component :IndexComponent ,title:'index'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routingComponents = [IndexComponent,PcComponent,
  XboxComponent,PlayStationComponent,OtherComponent,NotFoundComponent];
