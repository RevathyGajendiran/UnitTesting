import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input()
  public customerName: string;

  public dummymtd(): any {
    return this.customerName + 'updated in backend';
  }
  constructor() { }

  ngOnInit() {
  }

}
