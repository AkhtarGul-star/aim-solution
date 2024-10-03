import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { AboutComponent } from './features/about/about.component';
import { ShopComponent } from './features/shop/shop.component';

export const routes: Routes = [
{
    path:'',component:HomeComponent
},
{
    path:'about',component:AboutComponent
},
{
    path:'contact',component:ContactComponent
},
{
    path:'shop',component:ShopComponent
},
];
