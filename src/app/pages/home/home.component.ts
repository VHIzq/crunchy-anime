import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../shared/search-box/search-box.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
