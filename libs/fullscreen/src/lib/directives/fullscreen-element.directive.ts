import {Directive, HostListener, Input} from '@angular/core';
import * as screenfull from 'screenfull'

@Directive({
	selector: '[openElementFullscreen]'
})
export class OpenElementFullscreenDirective{
	@HostListener('click') onClick() {
		if (screenfull.isEnabled) {
      this.requestEleFullscreen()
		}
	}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() openElementFullscreen:any;

  requestEleFullscreen(){
    if (screenfull.isEnabled) {
      screenfull.request(this.openElementFullscreen);
    }
  }
}