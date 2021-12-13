import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefexWebsites'
})
export class PrefexWebsitesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
