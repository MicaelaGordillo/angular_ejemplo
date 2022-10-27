import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecno-web',
  templateUrl: './tecno-web.component.html',
  styleUrls: ['./tecno-web.component.css']
})
export class TecnoWebComponent implements OnInit {

  public image : string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.image = 'https://tja.ucb.edu.bo/wp-content/uploads/2021/08/image.png';
  }

}
