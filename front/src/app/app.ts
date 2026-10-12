import { Component, signal, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { SimulationComponent } from '../simulation-component/simulation-component';
import { CodeEditorComponent } from '../code-editor-component/code-editor-component';
import { DetailLevelService } from '../Services/detail-level-service';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SimulationComponent, CodeEditorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App implements OnInit {
  constructor(private cdr: ChangeDetectorRef) { }
  initializing = true;
  levels = inject(DetailLevelService);

  ngOnInit() {
    const currentLevel = this.levels.level();
    switch (currentLevel) {
      case 1:
        setTimeout(() => {
          this.initializing = false;
          this.cdr.detectChanges();
        }, 4000);
        break;
    }
  }
}
