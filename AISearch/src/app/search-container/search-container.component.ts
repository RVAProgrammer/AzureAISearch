import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../Services/search.service';
import { VideoGameManual } from '../models/Manual';
import { SearchItemComponent } from '../search-item/search-item.component';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-search-container',
  imports: [ReactiveFormsModule, SearchItemComponent, CommonModule],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css',
})
export class SearchContainerComponent {
  searchForm = new FormGroup({
    searchTerm: new FormControl(''),
  });

  searchResults: VideoGameManual[] = [];
  /**
   *
   */
  constructor(public searchService: SearchService) {}

  async doSearch() {
    this.searchResults = await this.searchService.search(
      this.searchForm.value.searchTerm ?? ''
    );
  }
}
