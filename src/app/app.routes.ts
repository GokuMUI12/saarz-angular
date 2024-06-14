import { Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CareersComponent } from './components/careers/careers.component';

export const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'contact-us' , loadComponent: () => import('./components/contact-us/contact-us.component').then((c => c.ContactUsComponent)) }, 
 {path : 'portfolio',loadComponent: () => import('./components/portfolio/portfolio.component').then((p => p.PortfolioComponent))},
 {path: 'careers' , loadComponent: () => import('./components/careers/careers.component').then((ca => ca.CareersComponent))}
];
