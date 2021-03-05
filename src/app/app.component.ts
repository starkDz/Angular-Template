import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Project Title';
  public direction: any;
  showNavigation = true;
  panelOpenState = true;
  // tslint:disable-next-line: max-line-length

  logout(){
    this.serviceLog.logout();
  }
  constructor(
    public translate: TranslateService,
    public cookieService: CookieService,
    private ref: ChangeDetectorRef,
    private http: HttpClient,private serviceLog:LoginService
  ) {}
  // tslint:disable-next-line: typedef
  openDrawer() {
    this.panelOpenState = !this.panelOpenState;
  }
  changeDirection(dir: string, language: string) {
    this.cookieService.set('dir', dir);
    this.translate.use(language);
    this.direction = dir;
    this.ref.detectChanges();
  }
  showNav() {
    this.showNavigation = false;
  }

  ngOnInit() {
    if (this.cookieService.get('dir')) {
      this.direction = this.cookieService.get('dir');
    } else {
      this.direction = 'ltr';
    }
  }
}
