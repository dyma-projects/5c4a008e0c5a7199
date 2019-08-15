import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[changeTextColor]' })
export class ColorDirective {

    constructor(private el: ElementRef) {} 
    
    @HostListener('window:keydown', ['$event']) windowKey($event) {
        switch ($event.keyCode) {
            case 37:
                this.changeColor('green');
                break;
            case 38:
                this.changeColor('orange');
                break;
            case 39:
                this.changeColor('red');
                break;
            case 40:
                this.changeColor('blue');
                break;
        }
    }

    private changeColor(color: string) {
        this.el.nativeElement.style.color = color;
    }
}