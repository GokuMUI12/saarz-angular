import { Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CareersComponent } from './components/careers/careers.component';

export const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'contact-us' , component : ContactUsComponent}, 
 {path : 'portfolio', component: PortfolioComponent},
 {path: 'careers' , component: CareersComponent}
];
