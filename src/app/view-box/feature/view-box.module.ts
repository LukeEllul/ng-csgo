import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBoxComponent } from './view-box.component';
import { ViewBoxRoutingModule } from './view-box-routing.module';
import { StoreModule } from '@ngrx/store';
import { viewBoxFeature } from '../data-access/view-box.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ViewBoxEffects } from '../data-access/view-box.effects';

@NgModule({
    declarations: [ViewBoxComponent],
    imports: [
        CommonModule,
        ViewBoxRoutingModule,
        StoreModule.forFeature(viewBoxFeature),
        EffectsModule.forFeature([ViewBoxEffects])
    ]
})
export class ViewBoxModule {}
