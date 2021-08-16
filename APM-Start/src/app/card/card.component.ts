import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl:'./card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  constructor() { }

  text = 'Card text'
  disabled = false;
  textStyle = {
    color: '#333',

  }

  imgsUrl = ['https://i.pinimg.com/originals/84/9b/63/849b636ec25a4f8badbf66acfff2d0c7.jpg','https://thumbs.dreamstime.com/b/happy-cat-closeup-portrait-funny-smile-cardboard-young-blue-background-102078702.jpg', 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnklMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGB2-4k5oSsLiRXmgMFJjQL2hjeuhAcxlsQ&usqp=CAU'
  ]

  imgUrl = 'https://i.pinimg.com/originals/84/9b/63/849b636ec25a4f8badbf66acfff2d0c7.jpg'
  ngOnInit() {

  }

  toggleImage() {

  }

  onInputChange(){

    if(this.text.length > 10){
      this.textStyle = {
        ...this.textStyle,
        color: 'red'

      }
    }
  }
  changeImg(){
    this.imgUrl = this.imgsUrl[Math.floor(Math.random()*this.imgsUrl.length)]
  }
}
