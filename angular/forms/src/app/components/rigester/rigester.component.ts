import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';

@Component({
  selector: 'app-rigester',
  templateUrl: './rigester.component.html',
  styleUrls: ['./rigester.component.scss']
})
export class RigesterComponent implements OnInit {

  constructor() { }

  user: User = {};
  hobby = {
    box: false,
    run: false,
    swim: false
  }

  ngOnInit(): void {
  }

  submit() {
    alert("submited!");

    this.user.hobby = [];
    if (this.hobby.box) this.user.hobby?.push("box");
    if (this.hobby.run) this.user.hobby?.push("run");
    if (this.hobby.swim) this.user.hobby?.push("swim");

    console.log(this.user);
  }

  reset() {
    this.user = new User();
  }

}
