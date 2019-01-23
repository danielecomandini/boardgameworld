import { Component, OnInit } from '@angular/core';
import { MenuLink } from 'src/model/menu/menu.link.model';
import { MenuListSimulator } from 'src/persistence/simulators/menu.list.simulator';

@Component({
  selector: 'bgw-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  menuList: MenuLink[] = [];

  constructor() { }

  ngOnInit() {
    let menuListSimulator: MenuListSimulator = new MenuListSimulator();
    this.menuList = menuListSimulator.getMenuList();
  }

}
