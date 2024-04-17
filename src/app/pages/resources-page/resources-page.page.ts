import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.page.html',
  styleUrls: ['./resources-page.page.scss'],
})
export class ResourcesPagePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    console.log('openMenu function called');
    this.menu.open('myMenu');

  }

}