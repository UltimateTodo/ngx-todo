import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatFormFieldModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

// load all the modules that need to imported and exported
const Modules: any[] = [
  MatCardModule
  , MatInputModule
  , MatButtonModule
  , MatSelectModule
  , MatSidenavModule
  , MatToolbarModule
  , MatCheckboxModule
  , MatFormFieldModule
  , MatPaginatorModule
  , MatExpansionModule
];

@NgModule({
  imports: [
      ...Modules
    , CommonModule
    , FlexLayoutModule
  ],
  exports: [...Modules]
})
export class MaterialModule { }
