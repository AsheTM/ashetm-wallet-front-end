import { HttpPathVariable } from '../types';


export interface ICompilePath {
  _compilePath?(path: string, obj: HttpPathVariable): string;
};
