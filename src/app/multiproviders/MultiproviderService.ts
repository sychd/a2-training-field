import {OpaqueToken, Injectable} from "@angular/core";
@Injectable()
export class MultiproviderService {

  public getSuccessMethod(dreams: boolean = true, opportunities: boolean = false): boolean {
    return dreams && opportunities;
  }
  public someMethod() {
    return 'hi';
  }
}

const VALUE: string = 'Omg, so valuable.';
export const MULTIPROVIDER_TOKEN: OpaqueToken = new OpaqueToken('Maybe useful but probably not.');
export let multiproviderTokenProviderObject = { provide: MULTIPROVIDER_TOKEN, useValue: VALUE };
