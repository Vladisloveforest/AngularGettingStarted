import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  title = 'User';
  constructor(public appService: AppService){}
}
