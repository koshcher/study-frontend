import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  id?: number;
  title: string = "";
  wtf: string = "";

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe((params: any) => this.title = params.title);
    route.data.subscribe((params: any) => this.wtf = params.wtf)
  }

  ngOnInit(): void {
  }

}
