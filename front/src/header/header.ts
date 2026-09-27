import { Component, inject } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { DetailLevelService } from '../Services/detail-level-service';
import { LevelNumbers } from '../Services/detail-level-service';

@Component({
  imports: [MatSliderModule],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  standalone: true,
})
export class HeaderComponent {
  levels = inject(DetailLevelService);
  numbers: LevelNumbers[] = [LevelNumbers.Level1, LevelNumbers.Level2];
}
