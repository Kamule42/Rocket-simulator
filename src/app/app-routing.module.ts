import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { EmptyMenuComponent } from './menu/empty-menu/empty-menu.component';

const appRoutes: Routes = [
  {path: 'main-menu', component: MainMenuComponent},
  {path: '**', component: EmptyMenuComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }