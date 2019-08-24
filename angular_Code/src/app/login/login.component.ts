import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApicallService } from '../apicall.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit() {
  }
  constructor(private router: Router, private _apiservice: ApicallService){
  }
  title = 'Sample';
  uname: string;
  pwd: string
  loginSub(formData) {
    let userData = {
      name:formData.value.uname,
      pwd:formData.value.password
    }
    console.log(userData)
    this._apiservice.loginApi(userData).subscribe(data => { console.log('Done', data)
      this.router.navigate(['/dash']);
    },
      error => { return false}
    );
  }
}
