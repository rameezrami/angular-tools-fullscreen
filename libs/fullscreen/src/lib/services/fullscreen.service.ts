import { Injectable } from '@angular/core';
import * as screenfull from 'screenfull'
@Injectable({
  providedIn: 'root'
})
export class FullscreenService {
  screenFull(){
    return screenfull
  }
}
