import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  chosenForm: string = '';

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      formName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onChosenForm(): void {
    this.chosenForm = this.form.get("formName")?.value;
  }

}
