
export class ImportOnce {

  constructor(private parentModule: Object) {
    if(parentModule)
      throw `${ parentModule.constructor.name } isn't imported once`;
  }

};
