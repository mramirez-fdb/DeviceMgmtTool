import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
// Import ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BooleanToEnglishPipe } from './boolean-to-english.pipe';
//https://johnpapa.net/introducing-angular-modules-feature-modules-2/
@NgModule({
    imports: [CommonModule, FormsModule, ButtonsModule, DropDownsModule],
    exports: [CommonModule, FormsModule, ButtonComponent, DropdownComponent, BooleanToEnglishPipe], //ButtonComponent, DateComponent
    declarations: [ButtonComponent, DropdownComponent, BooleanToEnglishPipe], //NameComponent ButtonComponent, DateComponent
    providers: [],
})
export class SharedModule { }
