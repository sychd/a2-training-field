import {
  Component, ComponentFactoryResolver, ComponentRef, TemplateRef, ViewChild,
  ViewContainerRef
} from "@angular/core";
import {AbstractDynamicComponent} from "./components/abstract-dynamic-component";
import {FirstComponent} from "./components/first/first.component";
import {SecondComponent} from "./components/second/second.component";
import {HostDirective} from "./host.directive";

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './container.component.html',
})
export  class ContainerComponent {
  @ViewChild(HostDirective)
  public host: HostDirective;
  private currentComp: ComponentRef<AbstractDynamicComponent>;

  public load(comp: 'first' | 'second') {
    if(this.currentComp) {
      //it can also be clear(), but it is for detailed instance
      const currIdx = this.host.vcr.indexOf(this.currentComp.hostView);
      this.host.vcr.remove(currIdx);
    }

    const cf = this.host.cfr.resolveComponentFactory(comp === 'first' ? FirstComponent : SecondComponent);
    this.currentComp = this.host.vcr.createComponent(cf);
    this.currentComp.instance.data = {some: 'data'};
    this.currentComp.instance.quack.subscribe(console.log.bind(this));
  }

  public changeData() {
    this.currentComp.instance.data  = {some: Math.random()};
  }
}
