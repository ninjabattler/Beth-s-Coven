import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  readings: string[] = ['Spiritual Communication', 'Fortune Telling', 'Q&A']
  chosenReading = new FormControl('');
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  additionalInfo = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
