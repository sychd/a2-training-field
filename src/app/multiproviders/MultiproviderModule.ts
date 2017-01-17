import {NgModule} from "@angular/core";
import {MultiproviderComponent} from "app/multiproviders/MultiproviderComponent";
import {MultiproviderService} from "app/multiproviders/MultiproviderService";
@NgModule({
  declarations: [MultiproviderComponent],
  exports: [MultiproviderComponent]
})
export class MultiproviderModule {}
