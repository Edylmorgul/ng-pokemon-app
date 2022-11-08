import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;
  private initialZoomScale: number = 1.12;
  private defaultZoomScale: number = 1;
  private defaultTransition : string = '0.3s ease-in-out';

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
   } // Référence l'élément du DOM ou la directive sera appliquée
  
   @Input('pokemonBorderCard') borderColor: string; // Version avec alias
   //@Input() pokemonBorderCard: string; // Version sans alias

   @HostListener('mouseenter') onMouseEnter(){
      this.setBorder(this.borderColor ||this.defaultColor);
      this.setZoomCard(this.initialZoomScale);
      this.setTransition(this.defaultTransition);
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
    this.setZoomCard(this.defaultZoomScale);
 }

   private setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

  private setZoomCard(zoom: number){
    this.el.nativeElement.style.transform = `scale(${zoom})`;
  }

  private setTransition(trans: string){
    this.el.nativeElement.style.transition = `${this.defaultTransition}`;
  }
}
