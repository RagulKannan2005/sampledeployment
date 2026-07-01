import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Vennila } from './component/vennila/vennila';
import { Stawberry } from './component/stawberry/stawberry';
import { Chocolate } from './component/chocolate/chocolate';

export const routes: Routes = [
    {path: '',component:Home},
    {path: 'home',component:Home},
    {path:'vennila',component:Vennila},
    {path:'stawberry',component:Stawberry},
    {path:'chocolate',component:Chocolate},

];
