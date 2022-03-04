import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Bill } from '../models/Bill.model';
import { BillsAddFormModalComponent } from './components/bills-add-form-modal/bills-add-form-modal.component';

@Component({
  selector: 'app-bills-page',
  templateUrl: 'bills.page.html',
  styleUrls: ['bills.page.scss'],
})
export class BillsPage {
  bills: Array<Bill> = [
    { name: 'rent', date: 1, frequency: 'monthly', amount: 1100.0 },
    { name: 'car', date: 15, frequency: 'monthly', amount: 340.0 },
    {
      name: 'car insurance',
      date: 13,
      frequency: 'monthly',
      amount: 245.0,
    },
    { name: 'verizon', date: 19, frequency: 'monthly', amount: 295.0 },
    { name: 'verizon', date: 19, frequency: 'monthly', amount: 295.0 },
    { name: 'verizon', date: 19, frequency: 'monthly', amount: 295.0 },
    { name: 'verizon', date: 19, frequency: 'monthly', amount: 295.0 },
    { name: 'verizon', date: 19, frequency: 'monthly', amount: 295.0 },
    { name: 'verizon', date: 19, frequency: 'monthly', amount: 295.0 },
    { name: 'verizon', date: 19, frequency: 'monthly', amount: 295.0 },
    { name: 'verizon', date: 19, frequency: 'monthly', amount: 295.0 },
  ];
  constructor(private modalController: ModalController) {}

  async openAddBillModal() {
    const modal = await this.modalController.create({
      component: BillsAddFormModalComponent,
    });

    modal.onDidDismiss().then(({ data }) => {
      if (data) {
        this.addBill(data);
      }
    });

    modal.present();
  }

  addBill(data) {
    this.bills = [...this.bills, data];
  }
}
