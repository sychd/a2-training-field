import {ComponentFactoryResolver, Directive, ViewContainerRef} from "@angular/core";

@Directive({
 selector: '[dynamicHostDirective]'
})
export class HostDirective {
  constructor(public vcr: ViewContainerRef, public cfr: ComponentFactoryResolver){}

}
