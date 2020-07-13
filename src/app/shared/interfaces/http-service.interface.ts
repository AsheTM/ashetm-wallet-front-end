import { Observable } from 'rxjs';

import { HttpPathVariable } from '../types';


export interface IHttpService {
  _makeRequest<T, U = any>(
    backendControllerApiDetailName: string,
    pathVariables: HttpPathVariable,
    requestBody?: U): Observable<T>;
}
