import { Component, Input, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  imports: [MonacoEditorModule, FormsModule, MatIconModule, MatButtonModule, CommonModule],
  selector: 'app-code-editor-component',
  styleUrl: './code-editor-component.scss',
  templateUrl: './code-editor-component.html',
  standalone: true,
})
export class CodeEditorComponent {
  @Input() init!: boolean;
  code = 'int x = 10;';
  editorOptions = {
    theme: 'vs-dark',
    language: 'csharp',
    automaticLayout: true,
    minimap: {
      enabled: false
    }
  }
  ngOnChanges() {
    console.log('init value changed:', this.init);
  }
}
