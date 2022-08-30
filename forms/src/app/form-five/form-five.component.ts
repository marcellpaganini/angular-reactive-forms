import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-five',
  templateUrl: './form-five.component.html',
  styleUrls: ['./form-five.component.css']
})
export class FormFiveComponent implements OnInit {
  public provinces = Object.values(Provinces);

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      addressType: new FormControl(''),
      city: new FormControl(''),
      province: new FormControl(''),
      postalCode: new FormControl(''),
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}

enum Provinces {
  ON = "Ontario",
  QC = "Quebec",
  NS = "Nova Scotia",
  NB = "New Brunswick",
  MB = "Manitoba",
  BC = "British Columbia",
  PE = "Prince Edward Island",
  SK = "Saskatchewan",
  AB = "Alberta",
  NL = "Newfoundland and Labrador"
}
