import { SelfFullscreenDirective } from './directives/fullscreen-self.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleFullScreenDirective } from './directives/toggle-fullscreen.directive';
import { OpenElementFullscreenDirective } from './directives/fullscreen-element.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [
    SelfFullscreenDirective,
    ToggleFullScreenDirective,
    OpenElementFullscreenDirective
  ],
  exports: [
    SelfFullscreenDirective,
    OpenElementFullscreenDirective,
    ToggleFullScreenDirective
  ]
})
export class FullscreenModule {}
