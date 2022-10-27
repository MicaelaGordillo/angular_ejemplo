import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  public image:string | undefined ;
  constructor() { }

  ngOnInit(): void {
    this.image = "https://d1ih8jugeo2m5m.cloudfront.net/2021/12/caracteristicas-de-las-paginas-web-1-1200x685.jpg";
  }

}
