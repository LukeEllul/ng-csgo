import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBoxComponent } from './view-box.component';
import { ViewBoxRoutingModule } from './view-box-routing.module';
import { StoreModule } from '@ngrx/store';
import { viewBoxFeature } from '../data-access/view-box.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ViewBoxEffects } from '../data-access/view-box.effects';
import { DetailedBoxModule } from '../ui/detailed-box/detailed-box.module';
import { ItemVariantModule } from '../ui/item-variant/item-variant.module';
import { LoaderModule } from '../../shared/ui/loader/loader.module';
import { ErrorModule } from '../../shared/ui/error/error.module';

@NgModule({
    declarations: [ViewBoxComponent],
    imports: [
        CommonModule,
        ViewBoxRoutingModule,
        StoreModule.forFeature(viewBoxFeature),
        EffectsModule.forFeature([ViewBoxEffects]),
        DetailedBoxModule,
        ItemVariantModule,
        LoaderModule,
        ErrorModule
    ]
})
export class ViewBoxModule {}
