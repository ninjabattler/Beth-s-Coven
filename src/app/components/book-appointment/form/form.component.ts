import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  firstName = new FormControl('');
  lastName = new FormControl('');
  additionalInfo = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
