import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.scss']
})
export class SightComponent implements OnInit {

  name?: string;
  id: number = 0;
  imgs = ["ddsad", "dsad"];
  // imgs = []
  constructor(private route: ActivatedRoute) {
    //route.params.subscribe((params: any) => this.name = params.name);
    route.params.subscribe((params: any) => this.id = params.id);
  }

  ngOnInit(): void {
  }

}
