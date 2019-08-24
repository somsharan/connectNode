import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApicallService } from '../../apicall.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _apiservice: ApicallService, private router: Router) { }

  ngOnInit() {
  }
  registerUser(formData) {
    
    let userData = {
      name:formData.value.uname,
      email:formData.value.email,
      pwd:formData.value.password
    }
    console.log(userData)
    this._apiservice.registerApi(userData).subscribe(data => { console.log('Done', data)
      this.router.navigate(['/login']);
    },
      error => { return false}
    );
  }
}
