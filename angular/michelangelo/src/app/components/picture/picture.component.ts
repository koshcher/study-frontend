import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImgService } from 'src/app/services/img.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  name?: string;
  src?: string;

  constructor(private imgService: ImgService, private router: ActivatedRoute) {
    router.params.subscribe((params: any) => {
      if (Object.keys(params).length != 0) {
        this.name = params.name;
        this.src = imgService.getSrc(this.name);
      }
    });

    router.data.subscribe((data: any) => {
      if (Object.keys(data).length != 0) {
        this.name = data.name;
        this.src = data.src;
      }
    });
  }

  ngOnInit(): void {
  }

}
