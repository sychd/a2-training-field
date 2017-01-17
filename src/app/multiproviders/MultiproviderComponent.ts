import {Component, Inject} from "@angular/core";
import {MultiproviderService, MULTIPROVIDER_TOKEN, multiproviderTokenProviderObject} from "app/multiproviders/MultiproviderService";
@Component({
  selector: 'tr-multip',
  templateUrl: './multiprovider.html',
  providers: [MultiproviderService, multiproviderTokenProviderObject]
})
export class MultiproviderComponent {
  constructor(private mps: MultiproviderService, @Inject(MULTIPROVIDER_TOKEN) private mpts: string) {

  }
}
