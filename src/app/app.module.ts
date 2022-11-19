import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryCache } from '@apollo/client/core';
import { StoreModule } from '@ngrx/store';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { AppComponent } from './app.component';

import * as app from './shared/data-access/app.reducer';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, StoreModule.forRoot(app.reducer)],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: 'https://api-staging.csgoroll.com/graphql',
                        withCredentials: true
                    })
                };
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
