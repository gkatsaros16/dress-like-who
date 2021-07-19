import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  img = ["../../../assets/choppa/chop3.jpg"]
  constructor() { }

  ngOnInit(): void {
  }

}
