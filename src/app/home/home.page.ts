import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  today = new Date();

  upcomingBills = [
    {
      bill: { amount: 110000, name: 'Rent' },
      due: { month: 12, day: 1, year: 2021 },
      due_date: new Date(2012, 12 - 1, 1),
      paid: false,
    },
  ];

  constructor() {}
}
