import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { HeroComponent } from "../hero/hero.component";

import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [FooterComponent, NavBarComponent, HeroComponent, RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
