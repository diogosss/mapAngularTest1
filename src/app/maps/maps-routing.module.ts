import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { HousesListComponent } from './pages/houses-list/houses-list.component';
import { HousesAddComponent } from './pages/houses-add/houses-add.component';
import { InfoComponent } from './pages/info/info.component';
import { NodeListComponent } from './pages/node-list/node-list.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      {
        path:'fullscreen', component: FullScreenPageComponent,
      },
      {
        path:'zoom-range', component: ZoomRangePageComponent,
      },
      {
        path:'markers', component: MarkersPageComponent,
      },
      {
        path:'properties', component: PropertiesPageComponent,
      },
      {
        path:'details', component: HousesListComponent,
      },
      {
        path:'add', component: HousesAddComponent,
      },
      {
        path:'nodes', component: NodeListComponent,
      },
      {
        path:'info', component: InfoComponent,
      },
      {
        path:'**', redirectTo: 'info',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
