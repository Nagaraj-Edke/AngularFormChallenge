import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForm';
  registrationForm :FormGroup;

  ngOnInit(){
    this.registrationForm = new FormGroup({
      firstname:new FormControl(''),
      lastname:new FormControl(''),

      areaCode:new FormControl(''),
      phoneNo:new FormControl(""),
      email:new FormControl(''),
      address:new FormGroup({
        streetAdd1:new FormControl('llll'),
        streetAdd2:new FormControl(''),
        city:new FormControl(""),
        state:new FormControl(''),
        zipcode:new FormControl('')
      }),
      occupation:new FormControl(''),
      companyName:new FormControl(""),
      jobTitle:new FormControl(''),
      workshopDate:new FormControl(''),
      payment:new FormControl(""),
      paymentMehod:new FormControl(""),
      comments:new FormControl(""),
      reference:new FormControl('')

    })
  }
}
