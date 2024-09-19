import { Component, Input, input } from '@angular/core';
import { VideoGameManual } from '../models/Manual';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css'
})
export class SearchItemComponent {
  @Input() manual : VideoGameManual | undefined;
  

}
