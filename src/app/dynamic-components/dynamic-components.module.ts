import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {ContainerComponent} from "./container.component";
import {FirstComponent} from "./components/first/first.component";
import {SecondComponent} from "./components/second/second.component";
import {HostDirective} from "./host.directive";

@NgModule({
  declarations: [
    ContainerComponent,
    FirstComponent,
    SecondComponent,
    HostDirective

  ],
  entryComponents: [
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [ContainerComponent]
})
export class DynamicComponentsModule {
}
