import {Component} from "@angular/core";
import {AbstractDynamicComponent} from "../abstract-dynamic-component";

@Component({
  selector: 'app-second-component',
  templateUrl: './second.component.html',
})
export  class SecondComponent extends AbstractDynamicComponent {

}
