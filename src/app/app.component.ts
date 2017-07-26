import { Component, ElementRef, HostListener, Input, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div class="border">
      <div class="title">main component</div>
      <h4>
        <span>ctrl+1</span>
        <input sfocus="ctrl+1" type="text"/>
      </h4>
      <app-component1></app-component1>
      <app-component2></app-component2>      
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';

  constructor(public element: ElementRef) {
    console.log(this.element.nativeElement);
    this.element.nativeElement // <- your direct element reference 
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let element;
    let commandType;
    if (event.altKey) {
      commandType = 'alt';
    } else if (event.shiftKey) {
      commandType = 'shift';
    } else if (event.ctrlKey) {
      commandType = 'ctrl';
    }
    element = this.element.nativeElement.querySelector('[sfocus="' + commandType + '+' + event.key.toLowerCase() + '"]');
    if (element) {
      element.focus();
      event.preventDefault();
    }
  }
}
