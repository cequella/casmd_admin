import { NgModule } from '@angular/core';

import { MdcTopAppBarModule,
	 MdcIconModule,
	 MdcDrawerModule,
	 MdcListModule,
	 MdcTextFieldModule,
	 MdcFormFieldModule,
	 MdcButtonModule
       } from '@angular-mdc/web';

@NgModule({
    declarations: [],
    imports: [
	MdcTopAppBarModule,
	MdcIconModule,
	MdcDrawerModule,
	MdcListModule,
	MdcTextFieldModule,
	MdcFormFieldModule,
	MdcButtonModule
    ],
    exports: [
	MdcTopAppBarModule,
	MdcIconModule,
	MdcDrawerModule,
	MdcListModule,
	MdcTextFieldModule,
	MdcFormFieldModule,
	MdcButtonModule
    ]
})
export class MaterialModule { }
