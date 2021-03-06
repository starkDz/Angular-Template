import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { EnumerationComponent } from './enumeration/enumeration.component';
import { I18nModule } from './i18n/i18n.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CookieService } from 'ngx-cookie-service';
import {
  CustomPaginator,
  DataTableComponent,
} from './SharedComponents/data-table/data-table.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ParametreComponent } from './parametre/parametre.component';
import { DataSummaryComponent } from './SharedComponents/data-summary/data-summary.component';
import { DataSummaryHeaderComponent } from './SharedComponents/data-summary-header/data-summary-header.component';
import { DataListeHeaderComponent } from './SharedComponents/data-liste-header/data-liste-header.component';
import { LoginComponent } from './login/login.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { ProfileComponent } from './profile/profile.component';
import { LockComponent } from './lock/lock.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LockComponent,
    ProfileComponent,
    NotFound404Component,
    EnumerationComponent,
    DataTableComponent,
    HomePageComponent,
    AboutComponent,
    ParametreComponent,
    DataSummaryComponent,
    DataSummaryHeaderComponent,
    DataListeHeaderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    I18nModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
