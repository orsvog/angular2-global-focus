import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-component1',
    template: `
    <div class="border">
      <div class="title">component1</div>
      <h4>
        <span>ctrl+2</span>
        <input sfocus="ctrl+2" type="text" />
      </h4>
      <app-component1-a></app-component1-a>
    </div>
  `,
    styles: []
})
export class Component1Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
