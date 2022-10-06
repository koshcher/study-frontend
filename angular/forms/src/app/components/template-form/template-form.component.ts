import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  constructor() { }

  user: User = {
    id: 1,
    firstName: "WTF",
    lastName: "is you?"
  };

  ngOnInit(): void {
  }

  submit() {

  }

}
