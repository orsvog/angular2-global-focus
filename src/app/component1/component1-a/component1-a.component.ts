import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-component1-a',
    template: `
    <div class="border">
      <div class="title">component1-a</div>
      <h4>
        <span>alt+e</span>
        <input sfocus="alt+e" type="text"/>
      </h4>
    </div>
  `,
    styles: []
})
export class Component1AComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
