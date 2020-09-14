import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @Input() activeTheme = 'vs';
  @Input() readOnly = false;
  @Input()
  code = [
    `import { TranslateModule, TranslateService } from '@ngstack/translate';`,
    `import { CodeEditorModule } from '@ngstack/code-editor';`,
    `import * as fs from 'fs';`,
    '',
    `export class MyClass {`,
    `  constructor(translate: TranslateService) {`,
    '',
    '  }',
    `}`
  ].join('\n');

  dependencies: string[] = [
    '@types/node',
    '@ngstack/translate', 
    '@ngstack/code-editor'
  ];

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };
}
