import {EventEmitter, Input, Output} from "@angular/core";

export class AbstractDynamicComponent {
  @Input()
  public data: any;

  @Output()
  public quack: EventEmitter<string> = new EventEmitter<string>();
}
