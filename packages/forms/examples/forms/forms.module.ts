import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
	AutoCompleteModule,
	MaskModule,
	RangeSliderModule,
	TimepickerModule,
	WysiwygModule,
} from '@acpaas-ui/ngx-components/forms';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RangeSliderModule,
		CodeSnippetModule,
		FormsModule,
		AutoCompleteModule,
		CodeSnippetModule,
 		MaskModule,
		TimepickerModule,
		WysiwygModule,
	],
	declarations: [
		Pages,
	],
})
export class FormsExamplesModule {}
