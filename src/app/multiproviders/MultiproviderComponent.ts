import {Component, Inject} from "@angular/core";
import {
  ORDINARY_TOKEN, ordinaryTokenObject,
  LOOK_THE_SAME_TOKEN_IN_SEVERAL_PROVIDERS,
  multiService, anotherMultiService
} from "./TokenHolder";



@Component({
  selector: 'tr-multip',
  templateUrl: './multiprovider.html',
  providers: [ordinaryTokenObject, multiService, anotherMultiService]
})
export class MultiproviderComponent {
  constructor(@Inject(ORDINARY_TOKEN) private ot: TokenInterface,
              @Inject(LOOK_THE_SAME_TOKEN_IN_SEVERAL_PROVIDERS) private mt: TokenInterface) {
  }
}

interface TokenInterface {
  value: string;
}
