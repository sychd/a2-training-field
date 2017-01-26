import {Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core"

@Directive({
  selector: '[myInputChangeColor]'
})
export class InputChangeColorDirective implements OnInit{
  @Input()
  public isColorChanged:  boolean;

  @Input('myInputChangeColor')
  public color: string = 'red';

  private initialColor: string;

  @HostListener('input') onInput() {
    setTimeout(() => this.isColorChanged ? this.colorize(this.color) :
                                    this.colorize(this.initialColor));
  }

  constructor(private el: ElementRef) {

  }

  public ngOnInit() {
    this.initialColor = this.el.nativeElement.style.color;
  }

  private colorize(color: string): void {
    this.el.nativeElement.style.color = color;
  }
}
