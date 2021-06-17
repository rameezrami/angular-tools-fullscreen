import { FullscreenService } from '@angular-tools/fullscreen';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-tools-fullscreen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fullscreen-demo';
  constructor(fullscreenService:FullscreenService){
    console.log('fullscreenService',fullscreenService.screenFull())
  }

  // @ViewChild('myname') public myname:any;
}
