import { Component } from '@angular/core';
import { DataService } from './data.service';
import { TopData } from './data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Possible themes
    deeppurple-amber.css
    indigo-pink.css
    pink-bluegrey.css current
    purple-green.css
  */
  title = 'AngularFlexApp';
  cache: TopData[] = [];
  constructor(private data: DataService) {}

  getData() {
    console.log(`Display is ${window.screen.width}`);
    this.data.requestData().subscribe(
      (data: TopData[]) => {
        console.log('Data returns');
        console.log(data);
        this.cache = [...data];
        // Send data to UI
        // Start styling
      }
    );
  }
}