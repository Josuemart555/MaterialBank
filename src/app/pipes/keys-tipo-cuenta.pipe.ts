import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysTipoCuenta',
  pure: false
})
export class KeysTipoCuentaPipe implements PipeTransform {

  transform(value: any): any {

    let keys = [];
    for ( let key in value ) {
      keys.push(key)
    }

    return keys;

  }

}
