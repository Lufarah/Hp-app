import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpellListPageRoutingModule } from './spell-list-routing.module';

import { SpellListPage } from './spell-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpellListPageRoutingModule
  ],
  declarations: [SpellListPage]
})
export class SpellListPageModule {}
