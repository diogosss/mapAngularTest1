import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] =[
    // {
    //   route: '/maps/fullscreen', name: 'FullScreen'
    // },
    // {
    //   route: '/maps/zoom-range', name: 'Zoom-Range'
    // },
    {
      route: '/maps/markers', name: 'Mapa de casas'
    },
    {
      route: '/maps/details', name: 'Lista de casas'
    },
    {
      route: '/maps/add', name: 'Añadir de casas'
    },
    {
      route: '/maps/nodes', name: 'Configuración de nodos'
    },
    {
      route: '/maps/info', name: 'Info'
    },
  ];

}
