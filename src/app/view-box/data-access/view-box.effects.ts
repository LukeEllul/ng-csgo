import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createEffect } from '@ngrx/effects';

@Injectable()
export class ViewBoxEffects {
    trackViewBox$ = createEffect;

    constructor(private route: ActivatedRoute) {}
}
