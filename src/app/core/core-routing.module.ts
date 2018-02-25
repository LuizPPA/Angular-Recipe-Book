import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'

const coreRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'not-found', component: NotFoundComponent}
  ]

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CoreRoutingModule{

}
