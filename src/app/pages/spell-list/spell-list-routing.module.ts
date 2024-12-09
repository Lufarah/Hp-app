import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpellListPage } from './spell-list.page';

const routes: Routes = [
  {
    path: '',
    component: SpellListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpellListPageRoutingModule {}
