import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div title="Line: {{ one }}&#010;Line: {{ two }}" i18n-title>Example</div>
    <div i18n>Interpolation: {{ one }}&nbsp;Interpolation: {{ two }}</div>
  `,
  styles: []
})
export class AppComponent {
  one = 1;
  two = 2;
}
