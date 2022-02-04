import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { IHighlightConfig } from '../models/IHighLightConfig';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // @Input('appHighlight') speed: number = 0;
  // @Input() color: string = 'green';

  @Input('appHighlight') configValues: IHighlightConfig = {
    speed: 0,
    color: 'green',
  };

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor =
      this.configValues.color;
    (this.el.nativeElement as HTMLElement).style.transition =
      'all ' + this.configValues.speed + 's';
  }

  @HostListener('mouseleave') onMouseLeave() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor =
      'transparent';
  }
}
