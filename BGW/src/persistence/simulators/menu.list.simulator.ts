import { MenuLink } from "src/model/menu/menu.link.model";

export class MenuListSimulator {
    menuList: MenuLink[] = [];
    
    public getMenuList() {
        this.menuList.push( this._createSingleMenuItem( "Home" , "/home" , true ) );
        this.menuList.push( this._createSingleMenuItem( "Board Games" , "/boardgames" , false ) );
        this.menuList.push( this._createSingleMenuItem( "Contact Me" , "/contactme" , false ) );
        return this.menuList;
    }

    _createSingleMenuItem(label: string, href: string, active: boolean) {
        let menuLink = new MenuLink();
        menuLink.label = label;
        menuLink.href = href;
        menuLink.active = active;
        return menuLink;
    }

}