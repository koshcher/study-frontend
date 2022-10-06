import { Component, OnInit } from '@angular/core';
import { ImgService } from 'src/app/services/img.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  pictures: any[];

  constructor(private imgService: ImgService) {
    this.pictures = imgService.getPictures();
  }

  ngOnInit(): void {
  }

}
