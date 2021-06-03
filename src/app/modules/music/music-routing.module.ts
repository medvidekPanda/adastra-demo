import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterpretDetailComponent } from './interpret-detail/interpret-detail.component';
import { InterpretListComponent } from './interpret-list/interpret-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'interpret-list',
    pathMatch: 'full'
  },
  {
    path: 'interpret-list',
    component: InterpretListComponent,
  },
  {
    path: 'interpret-detail/:id',
    component: InterpretDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
