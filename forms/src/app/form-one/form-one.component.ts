import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';
  titleAlert: string = 'This field is required';

  constructor(private fb: FormBuilder) {
    this.rForm =fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(500)])],
      'validate' : ''
    });
  }

  ngOnInit() {
    this.rForm.get('validate')?.valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name')?.setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters.";
        } else {
          this.rForm.get('name')?.setValidators(Validators.required);
        }
        this.rForm.get('name')?.updateValueAndValidity();
      }
    )
  }

  addPost(post: any) {
    this.description = post.description;
    this.name = post.name;
  }
}
