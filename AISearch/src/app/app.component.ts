import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchContainerComponent } from "./search-container/search-container.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchContainerComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AISearch';
}
