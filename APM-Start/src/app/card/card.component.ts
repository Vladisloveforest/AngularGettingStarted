import { Input } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl:'./card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  // constructor() { }

  @Input() url:string='';
  @Input() title:string='';



  ngOnInit() {
    console.log('card init')
  }
}
