import { IMapping } from '../mappings';
import { Model } from '../models';


export interface IMappingView<T extends IMapping> {
  _mapping(obj: T): Model;
}
