import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-five',
  templateUrl: './form-five.component.html',
  styleUrls: ['./form-five.component.css']
})
export class FormFiveComponent implements OnInit {
  public provinces = Object.values(Provinces);

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      addressType: new FormControl(''),
      city: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      postalCode: new FormControl('', [Validators.required, Validators.pattern('^(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\s{0,1}\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d$')]),
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

  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get street() { return this.profileForm.controls.address.get('street'); }
  get city() { return this.profileForm.controls.address.get('city'); }
  get province() { return this.profileForm.controls.address.get('province'); }
  get postalCode() { return this.profileForm.controls.address.get('postalCode'); }

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
