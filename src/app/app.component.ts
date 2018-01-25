import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numberForm: FormGroup;
  order: any;

  constructor(private db: AngularFireDatabase, private fb: FormBuilder) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
}
}
