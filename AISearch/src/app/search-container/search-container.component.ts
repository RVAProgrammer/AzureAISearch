import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../Services/search.service';
@Component({
  standalone: true,
  selector: 'app-search-container',
  imports: [ReactiveFormsModule],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css',
})
export class SearchContainerComponent {
  searchForm = new FormGroup({
    searchTerm: new FormControl(''),
  });

  /**
   *
   */
  constructor(public searchService: SearchService) {}

  doSearch() {
    this.searchService.search(this.searchForm.value.searchTerm ?? '');
  }
}
