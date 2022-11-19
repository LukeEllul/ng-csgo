import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryCache } from '@apollo/client/core';
import { StoreModule } from '@ngrx/store';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { AppComponent } from './app.component';

import * as root from './shared/data-access/root.reducer';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, StoreModule.forRoot(root.reducer)],
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
