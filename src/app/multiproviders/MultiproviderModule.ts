import {NgModule} from "@angular/core";
import {MultiproviderComponent} from "app/multiproviders/MultiproviderComponent";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [MultiproviderComponent],
  imports:[CommonModule],
  exports: [MultiproviderComponent]
})
export class MultiproviderModule {}
