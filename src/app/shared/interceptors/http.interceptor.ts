import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor as HttpCoreInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpInterceptor implements HttpCoreInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }

}
