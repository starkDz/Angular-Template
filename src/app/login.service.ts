import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { AppSettings } from './baseUrl';
import { LoginRequestResult } from './request-result';

export interface Authentication {
  userNameOrEmailAddress: string;
  password: string;
  rememberMe: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login(auth: Authentication) {
    this.http
      .post(AppSettings.API_ENDPOINT + '/api/account/login', auth)
      .subscribe((e) => {
        if ((e as LoginRequestResult).description == 'Success') {
          this.appService.openSuccessSnackBar('Connexion est etablie');
        } else {
          this.appService.openFailureSnackBar('Connexion non etablie');
        }
      });
  }
  logout() {
    if (this.http.get(AppSettings.API_ENDPOINT + '/api/account/logout')) {
      this.appService.openSuccessSnackBar('Disconnected Successfully');
    } else {
      this.appService.openFailureSnackBar('Error While Disconnecting');
    }
  }
  constructor(private http: HttpClient, private appService: AppService) {}
}
