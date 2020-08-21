import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import { ErrorComponent } from './error/error.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unkown error ocurred';
        console.log(error.error.error) 
        if(error.message){
          errorMessage = error.error.error;
        }
        this.dialog.open(ErrorComponent, {data : { message: errorMessage }});
        return throwError(error);
      })
    );
  }
}