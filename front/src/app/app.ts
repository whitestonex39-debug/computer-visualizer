import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { SimulationComponent } from '../simulation-component/simulation-component';
import { CodeEditorComponent } from '../code-editor-component/code-editor-component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SimulationComponent, CodeEditorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {

}
