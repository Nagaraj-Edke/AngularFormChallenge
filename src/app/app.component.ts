import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForm';
  registrationForm :FormGroup;
  get email(){
    return this.registrationForm.get('email')
  }
  get selfRating(){
    return this.registrationForm.get('selfRating')
  }
  get course(){
    return this.registrationForm.get('course')
  }
  get firstname(){
    return this.registrationForm.get('firstname')
  }
  get lastname(){
    return this.registrationForm.get('lastname')
  }
  get areaCode(){
    return this.registrationForm.get("areaCode")
  }
  get phoneNo(){
    return this.registrationForm.get('phoneNo')
  }
  get state(){
    return this.registrationForm.get('state')
  }
  get zipcode(){
    return this.registrationForm.get('zipcode')
  }
  


  ngOnInit(){
    this.registrationForm = new FormGroup({
      selfRating:new FormControl("",[Validators.required]),
      course:new FormControl('',[Validators.required]),
      firstname:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),

      areaCode:new FormControl('',[Validators.required]),
      phoneNo:new FormControl("",[Validators.required]),
      email:new FormControl('',[Validators.required]),
      address:new FormGroup({
        streetAdd1:new FormControl(''),
        streetAdd2:new FormControl(''),
        city:new FormControl(""),
        state:new FormControl(''),
        zipcode:new FormControl('')
      }),
      occupation:new FormControl(''),
      companyName:new FormControl(""),
      jobTitle:new FormControl(''),
      workshopDate:new FormControl('',[Validators.required]),
      payment:new FormControl("",[Validators.required]),
      paymentMethod:new FormControl("",[Validators.required]),
      comments:new FormControl(""),
      reference:new FormControl('',[Validators.required])

    })
  }

  submit(){
    console.log(this.registrationForm.value);
    
  }
}
