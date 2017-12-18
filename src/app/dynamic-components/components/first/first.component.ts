import {Component} from "@angular/core";
import {AbstractDynamicComponent} from "../abstract-dynamic-component";

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
})
export  class FirstComponent extends AbstractDynamicComponent {

}
