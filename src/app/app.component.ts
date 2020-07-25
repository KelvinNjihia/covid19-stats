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
      icon: 'language'
    },
    {
      label: 'Graphs',
      icon: 'poll'
    },
    {
      label: 'About',
      icon: 'info'
    }
  ];
}
