import { Component, Input } from '@angular/core';
import { Main } from './main';

@Component({
  selector: 'main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.css']
})
export class MainDetailsComponent {
  @Input() articles: Main

}
