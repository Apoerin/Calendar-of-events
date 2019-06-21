import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from  '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {

  @Input() myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {

    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      text: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
