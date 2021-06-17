import {Directive, ElementRef, HostListener} from '@angular/core';
import * as screenfull from 'screenfull'

@Directive({
	selector: '[openSelfFullscreen]'
})
export class SelfFullscreenDirective{
  constructor(private el: ElementRef) { }
	@HostListener('click') onClick() {
    this.requestSelefElementFullscreen()
	}

  requestSelefElementFullscreen(){
    if (screenfull.isEnabled) {
      screenfull.request(this.el.nativeElement);
    }
  }
}