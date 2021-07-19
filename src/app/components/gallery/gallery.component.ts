import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imgs = ["../../../assets/choppa/chop1.jpg", "../../../assets/choppa/chop2.jpg", "../../../assets/choppa/chop3.jpg", "../../../assets/choppa/chop4.jpg"]
  constructor() { }

  ngOnInit(): void {
  }

}
