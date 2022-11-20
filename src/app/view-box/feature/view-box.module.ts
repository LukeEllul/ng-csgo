import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBoxComponent } from './view-box.component';
import { ViewBoxRoutingModule } from './view-box-routing.module';

@NgModule({
    declarations: [ViewBoxComponent],
    imports: [CommonModule, ViewBoxRoutingModule]
})
export class ViewBoxModule {}
