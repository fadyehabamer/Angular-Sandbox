import { Directive, ElementRef, HostListener , Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]',
})
export class HighlightElementDirective 
  implements  OnChanges
{
  // ele : ElementRef;

  // constructor(element:ElementRef) {
  //   this.ele = element;
  //   element.nativeElement.style.backgroundColor = 'yellow';
  //  }


  // for a new attribute
  @Input() externalColor : string = 'yellow';


  // for an existing attribute  
  @Input('appHighlightElement') highlightOriginalColor: string = 'GREEN';

  constructor(private ele: ElementRef) {
    // ele.nativeElement.style.backgroundColor ='yellow';
  }

  @HostListener('mouseover') mouseEnter() {
    this.ele.nativeElement.style.backgroundColor = this.externalColor  ;
  }

  @HostListener('mouseout') mouseLeave() {
    this.ele.nativeElement.style.backgroundColor = 'yellow';
  }


  ngOnChanges() {
    this.ele.nativeElement.style.backgroundColor = this.highlightOriginalColor;
  }
}
