import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ireturn',
  templateUrl: './ireturn.component.html',
  styleUrls: ['./ireturn.component.css']
})
export class IreturnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  now():Date{
    return new Date();
  }
}
