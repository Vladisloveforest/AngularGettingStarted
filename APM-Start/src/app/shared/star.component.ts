import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-stars',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit {

    @Input() rating: number = 4;
    cropWidth: number = 75;

    
    ngOnInit(): void {
         this.cropWidth = this.rating * 75 / 5;
    }
}