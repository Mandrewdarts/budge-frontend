import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bills-add-form-modal',
  templateUrl: './bills-add-form-modal.component.html',
  styleUrls: ['./bills-add-form-modal.component.css'],
})
export class BillsAddFormModalComponent implements OnInit {
  form = this.fb.group({
    name: this.fb.control(null, [Validators.required]),
    amount: this.fb.control(null, [Validators.required]),
    frequency: this.fb.control(null, []),
    date: this.fb.control(null, []),
  });
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.modalController.dismiss(this.form.value);
    }
  }

  close() {
    this.modalController.dismiss();
  }
}
