import { Component, OnInit } from '@angular/core';

@Component({
  selector:"welcome",
  templateUrl: './welcome.component.html',
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {

  imagesUrls:string[] = []
  public pageTitle = 'Just Random Pictures';
  showImages:boolean = true;
  filterItems:string = '';
  titles: string[] = ['coffee','book','droplets','tower','field','car','mansion','random image','station','field','plant','random image','city','plants','cow','trees','coast',];
  stars: number[] = [1,2,3,1,2,3,1,2,3,1,2,3,2,2,3,2,3];

  constructor() {}

  ngOnInit(): void {
    this.imagesUrls = ['https://picsum.photos/id/42/300', 'https://picsum.photos/id/24/300', 'https://picsum.photos/id/123/300', 'https://picsum.photos/id/500/300','https://picsum.photos/id/112/300', 'https://picsum.photos/id/111/300', 'https://picsum.photos/id/142/300', 'https://picsum.photos/300','https://picsum.photos/id/800/300', 'https://picsum.photos/id/300/300', 'https://picsum.photos/id/400/300', 'https://picsum.photos/300','https://picsum.photos/id/288/300', 'https://picsum.photos/id/18/300', 'https://picsum.photos/id/200/300', 'https://picsum.photos/id/10/300','https://picsum.photos/id/14/300']
  }
  

}
