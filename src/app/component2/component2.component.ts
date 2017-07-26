import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-component2',
    template: `
    <div class="border">
      <div class="title">component2</div>
      <h4>
        <span>shift+q</span>
        <select sfocus="shift+q" multiple>
          <option value="1">Stark</option>
          <option value="2">Lannister</option>
          <option value="3" selected>Tully</option>
          <option value="4">Vale</option>
        </select>
      </h4>
    </div>
  `,
    styles: []
})
export class Component2Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
