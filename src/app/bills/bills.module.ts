import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BillsPage } from './bills.page';

import { BillsPageRoutingModule } from './bills-routing.module';
import { BillsAddFormModalComponent } from './components/bills-add-form-modal/bills-add-form-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    BillsPageRoutingModule,
  ],
  declarations: [BillsPage, BillsAddFormModalComponent],
})
export class BillsPageModule {}
