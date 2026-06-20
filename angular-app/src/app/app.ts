import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Home } from './home/home';
import { Text } from './text/text';
import { FormsModule } from '@angular/forms';
import { Createcomponent } from './createcomponent/createcomponent';
import { Showcomments } from './showcomments/showcomments';
// import { Home } from './home/home';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Text,FormsModule,Createcomponent,Showcomments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
 
}
