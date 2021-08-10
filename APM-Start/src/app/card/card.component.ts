import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl:'./card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  constructor() { }

  text = 'im i miss something?'

  imgUrl = 'https://i.pinimg.com/originals/84/9b/63/849b636ec25a4f8badbf66acfff2d0c7.jpg'

  ngOnInit() {

  }

  toggleImage() {
    this.imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMNirtA03z3SH6t4_uzKspyhFHCvo6iFGxA&usqp=CAU"
    setTimeout(() => {
      this.imgUrl = 'https://i.pinimg.com/originals/84/9b/63/849b636ec25a4f8badbf66acfff2d0c7.jpg'
    },3000)
  }

  changeText(){
    this.text = "HAHHAHA";
  }

  onChangeInput(event: any){
    this.text = event.target.value;
  }
}
