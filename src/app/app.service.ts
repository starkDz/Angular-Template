import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _snackBar: MatSnackBar) {}
  openSuccessSnackBar(msg: string) {
    this._snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['green-snackbar', 'login-snackbar'],
    });
  }
  openFailureSnackBar(msg: string) {
    this._snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['red-snackbar','login-snackbar'],
    });
  }
}
