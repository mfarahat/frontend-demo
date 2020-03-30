import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { dateIntervals, DateInterval } from '../../date-interval';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent {

  form: FormGroup;
  maxDat: Date;
  minDate: Date;
  periodIncOptions: string[];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      startDate: [''],
      endDate: [''],
      periodIncrement: ['']
    });
  }

  datesChanged(): void {
    const start = moment(this.form.controls['startDate'].value);
    const end = moment(this.form.controls['endDate'].value);
    const options: string[] = [];
    dateIntervals.forEach((dateInterval: DateInterval) => {
      const diff: number = end.diff(start, dateInterval.differenceCategory);
      if (diff >= dateInterval.differenceCount) {
        options.push(dateInterval.name);
      }
    });
    this.periodIncOptions = options;
  }

}
