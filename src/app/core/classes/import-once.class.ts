
export class ImportOnce {

  constructor(private parentModule: Object) {
    if(this.parentModule)
      throw `${ this.parentModule.constructor.name } isn't imported once`;
  }

};
