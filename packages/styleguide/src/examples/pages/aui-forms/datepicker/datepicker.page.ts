import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {DateRange} from '@acpaas-ui/js-date-utils';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IntervalBuilder} from '@acpaas-ui/ngx-utils';
import * as _moment from 'moment';

const Moment: new () => _moment.Moment = _moment as any;

@Component({
  templateUrl: './datepicker.page.html',
})
export class FormsDatepickerDemoPageComponent implements OnInit, OnDestroy {
  public dateForm: FormGroup;
  public interval = IntervalBuilder.momentInterval(null, (new Moment()))
    .leftOpenInterval()
    .unbounded()
    .build();
  public datepickerImportExample = `import { DatepickerModule } from '@acpaas-ui/ngx-forms';

@NgModule({
	imports: [
		DatepickerModule.forChild([
			'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag',
		], [
			'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December',
		], {
			ERRORS_INVALID_DATE: 'Ongeldige datum',
			ERRORS_INVALID_RANGE: 'Deze datum kan niet gekozen worden',
		}),
	],
})

export class AppModule {};`;
  public datepickerExampleTypescript = `import { FormBuilder, FormGroup } from '@angular/forms';

import { DateRange } from '@acpaas-ui/js-date-utils';
import { IntervalDate } from '@acpaas-ui/ngx-utils';

constructor(private fb: FormBuilder) { }

// This interval disables the past, optional
public interval = IntervalBuilder.momentInterval(null, (new Moment()))
    .leftOpenInterval()
    .unbounded()
    .build();
public dateForm: FormGroup;

this.dateForm = this.fb.group({
	inputDate: [''],
});`;
  public datepickerExampleHTML = `<form [formGroup]="dateForm">
	<div class="a-input has-icon-right" [ngClass]="{'has-error': dateForm.controls.inputDate.dirty && dateForm.controls.inputDate.invalid}">
		<label class="a-input__label" for="input-datepicker">Pick a date</label>
		<aui-datepicker
			data-id="input-datepicker"
			name="input-datepicker"
			autocomplete="off"
			placeholder="dd/mm/jjjj"
			formControlName="inputDate"
			[interval]="interval">
		</aui-datepicker>
		<div *ngIf="dateForm.controls['inputDate'].errors">
			<p *ngIf="dateForm.controls['inputDate'].errors.format">{{ dateForm.controls['inputDate'].errors.format }}</p>
			<p *ngIf="dateForm.controls['inputDate'].errors.range">{{ dateForm.controls['inputDate'].errors.range }}</p>
		</div>
	</div>
</form>`;
  private destroyed$ = new Subject<boolean>();

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.dateForm = this.fb.group({
      inputDate: [new Date().toISOString()],
      isDisabled: false,
    });

    this.dateForm.get('isDisabled').valueChanges
      .pipe(
        takeUntil(this.destroyed$),
      )
      .subscribe((isDisabled: boolean) => {
        if (isDisabled) {
          this.dateForm.get('inputDate').disable();
        } else {
          this.dateForm.get('inputDate').enable();
        }
      });
  }

  public ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
