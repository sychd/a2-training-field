import {OpaqueToken, ValueProvider} from "@angular/core";

export const ORDINARY_TOKEN: OpaqueToken = new OpaqueToken('Ordinary.');

export const ordinaryTokenObject = {
  provide: ORDINARY_TOKEN, useValue: {
    value: 'No array here'
  }
};

export const LOOK_THE_SAME_TOKEN_IN_SEVERAL_PROVIDERS = new OpaqueToken('Some magic here.');

export const multiService: ValueProvider = {
  provide: LOOK_THE_SAME_TOKEN_IN_SEVERAL_PROVIDERS,
  useValue: {
    value: 'Pay attention - it is an array.'
  },
  multi: true
};

export const anotherMultiService: ValueProvider = {
  provide: LOOK_THE_SAME_TOKEN_IN_SEVERAL_PROVIDERS,
  useValue: {
    value: 'The index of multiprovider depends on its sequence in @Component\'s providers array.'
  },
  multi: true
};


