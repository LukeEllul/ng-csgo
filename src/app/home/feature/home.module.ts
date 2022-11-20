import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import { homeFeature } from '../data-access/home.reducer';
import { HomeEffects } from '../data-access/home.effects';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        StoreModule.forFeature(homeFeature),
        EffectsModule.forFeature([HomeEffects])
    ]
})
export class HomeModule {}
