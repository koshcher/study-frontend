import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: number = -1;

  constructor(private rout: ActivatedRoute) {
    rout.params.subscribe((params: any) => this.id = params.id);
  }

  ngOnInit(): void {
  }

}
