import { MenuItem } from './models/menu-item';
import { Component } from '@angular/core';
@Component({
  selector: 'covid19-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19-stats';
  menuItems: MenuItem[] = [
    {
      label: 'Countries',
      icon: 'language',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      route: '/'
    },
    {
      label: 'Graphs',
      icon: 'poll',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      route: '/graphs'
    },
    {
      label: 'About',
      icon: 'info',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      route: '/#'
    }
  ];
}
