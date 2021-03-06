import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from './../../modules/material/material.module';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
    imports: [
        CommonModule
        , MaterialModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule { }
