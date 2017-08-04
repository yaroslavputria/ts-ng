import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    //pure: false, // Angular executes its pipe during every change detection
    name: 'starsAbbreviat'
})
export class StarsAbbreviatPipe implements PipeTransform {
    transform(value: string, maxLength: number): string {
        return (value.length > maxLength) ? value.substr(0, maxLength) + '...' : value;
    }
}
