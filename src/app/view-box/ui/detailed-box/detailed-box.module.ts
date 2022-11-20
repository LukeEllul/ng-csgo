import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedBoxComponent } from './detailed-box.component';

@NgModule({
    declarations: [DetailedBoxComponent],
    imports: [CommonModule],
    exports: [DetailedBoxComponent]
})
export class DetailedBoxModule {}
