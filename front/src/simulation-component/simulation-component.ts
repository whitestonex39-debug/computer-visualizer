import { Component, inject, Input } from '@angular/core';
import { DetailLevelService } from '../Services/detail-level-service';


@Component({
  imports: [],
  selector: 'app-simulation-component',
  styleUrl: './simulation-component.scss',
  templateUrl: './simulation-component.html',
  standalone: true,
})
export class SimulationComponent {
  @Input() init!: boolean;
  levels = inject(DetailLevelService);
}
