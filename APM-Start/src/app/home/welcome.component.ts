import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector:"welcome",
  templateUrl: './welcome.component.html',
  styleUrls: ["./welcome.component.css"],
  providers: [AppService]
  
})
export class WelcomeComponent implements OnInit {

  imagesUrls:string[] = []
  public pageTitle = 'Just Random Pictures';
  showImages:boolean = true;
  filterItems:string = '';
  // titles: string[] = ['coffee','book','droplets','tower','field','car','mansion','random image','station','field','plant','random image','city','plants','cow','trees','coast',];
  titles: string[] =[];
  stars: number[] = [1,2,3,1,2,3,1,2,3,1,2,3,2,2,3,2,3];

  @Input() appService?: AppService;

  constructor( ) {}

  ngOnInit(): void {
    debugger
    if(this.appService){
      this.imagesUrls = this.appService.imageUrls
      this.titles = this.appService.titles
    } 
  }
  

}
