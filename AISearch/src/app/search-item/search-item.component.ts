import { Component, Input, input } from '@angular/core';
import { VideoGameManual } from '../models/Manual';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css'
})
export class SearchItemComponent {
  @Input() manual : VideoGameManual | undefined;
  

}
