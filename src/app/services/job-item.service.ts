import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, retry, throwError } from 'rxjs';
import { IJob } from '../models/job';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class JobItemService {

  getList = ():Observable<IJob[]> => {
    return this.http
      .get<IJob[]>(
        'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
      ).pipe(
        delay(1000),
        retry(2),
        catchError(this.errorHandler))
  }

  onApplyClicked = (id:string) => {
    //-----there is some apply logic---------
  }

  onSaveClicked = (id:string) => {
    //-----there is some save logic---------
  }

  onShareClicked = (id:string) => {
    //-----there is some share logic---------
  }


  constructor(private http: HttpClient,
              private errorService: ErrorService) {}

  private errorHandler = (error: HttpErrorResponse) => {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
