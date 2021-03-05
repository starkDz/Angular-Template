import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authentication = new FormGroup({
    userNameOrEmailAddress: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(true),
  });
  isSubmited = false;

  get username() {
    return this.authentication.get('userNameOrEmailAddress')?.valid;
  }
  get password() {
    return this.authentication.get('password')?.valid;
  }

  constructor(private service: LoginService) {}
  onSubmit() {
    this.isSubmited = true;
    if (this.authentication.valid) {
      this.service.login(this.authentication.value);
    }else{
      //TODO Veuillez Rmeplire tt els champs obligatoire
    }
  }
  ngOnInit(): void {}
}
