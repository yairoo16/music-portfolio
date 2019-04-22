import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Request } from '../model/request';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request: Request;
  requestForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initRequestForm();
  }

  private initRequestForm() {
    this.requestForm = this.fb.group({
      email: [''],
      subject: [''],
      description: ['']
    });
  }

  submitRequest() {
    if (this.requestForm.valid) {
      this.request = Object.assign({}, this.requestForm.value);
      console.log(this.request);
    }
  }

}
