import { AbstractControl } from '@angular/forms'
import { Observable } from 'rxjs/Observable'

export class AppValidators{

  static image(control: AbstractControl): {[s: string]: boolean} | Promise<{[s: string]: boolean}> | Observable<{[s: string]: boolean}>{
    let url = control.value
    if(url == null)
      return {nullUrl: true}
    if(AppValidators.validURL(url)){
      if(url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.bmp')){
        return null
      }
      else{
        return {notAnImage: true};
      }
    }
    return {invalidUrl: true};
  }

  static validURL(str: string): boolean {
    let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
    if(!regex.test(str)) {
      return false
    } else {
      return true
    }
  }

  static positive(control: AbstractControl): {[s: string]: boolean} | Promise<{[s: string]: boolean}> | Observable<{[s: string]: boolean}>{
    if(control.value > 0){
      return null
    }
    else{
      return {invalidNumber: true}
    }
  }

}
