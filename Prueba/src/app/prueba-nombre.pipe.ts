import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pruebaNombre',
  standalone: true
})
export class PruebaNombrePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
