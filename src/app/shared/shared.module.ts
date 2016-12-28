import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
// Import ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonComponent } from './button/button.component';
//https://johnpapa.net/introducing-angular-modules-feature-modules-2/
@NgModule({
    imports: [CommonModule, FormsModule, ButtonsModule, DropDownsModule],
    exports: [CommonModule, FormsModule, ButtonComponent], //ButtonComponent, DateComponent
    declarations: [ButtonComponent], //NameComponent ButtonComponent, DateComponent
    providers: [],
})
export class SharedModule { }
