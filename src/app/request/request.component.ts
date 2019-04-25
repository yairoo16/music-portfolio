import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Request } from '../_models/request';
import { RequestService } from '../_services/request.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request: Request;
  requestForm: FormGroup;

  constructor(private fb: FormBuilder, private requestService: RequestService) { }

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
      this.requestService.submitRequest(this.request).subscribe(() => {
        console.log('Request submitted');
      }, error => {
        console.log(error);
      });

    }
  }

}
