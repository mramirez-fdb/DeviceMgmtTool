import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
// Import ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule, ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BooleanToEnglishPipe } from './boolean-to-english.pipe';
import { TriStateBoolComponent } from './tri-state-bool/tri-state-bool.component';
import { ReferentialComboboxComponent } from './referential-combobox/referential-combobox.component';

/*try out the primeng widgets */
import {GrowlModule, Message, Growl} from "primeng/primeng";
import { FdbGrowlComponent } from './fdb-growl/fdb-growl.component';
import{DomHandler} from "primeng/components/dom/domhandler";
//https://johnpapa.net/introducing-angular-modules-feature-modules-2/
@NgModule({
    imports: [CommonModule, FormsModule, ButtonsModule, DropDownsModule, ComboBoxModule, GrowlModule],
    exports: [CommonModule, FormsModule, ButtonComponent, DropdownComponent, 
    FdbGrowlComponent, BooleanToEnglishPipe, TriStateBoolComponent, ReferentialComboboxComponent], //ButtonComponent, DateComponent
    declarations: [ButtonComponent, DropdownComponent, BooleanToEnglishPipe, 
    TriStateBoolComponent, FdbGrowlComponent, ReferentialComboboxComponent], //NameComponent ButtonComponent, DateComponent
    providers: [DomHandler],
})
export class SharedModule { }
