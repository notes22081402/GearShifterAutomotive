import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Services } from './services/services';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about',component: About},
  { path: 'contact',component: Contact},
  {path:'services',component:Services},
];