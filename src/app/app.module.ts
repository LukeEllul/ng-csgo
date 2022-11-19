import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryCache, split } from '@apollo/client/core';
import { StoreModule } from '@ngrx/store';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { AppComponent } from './app.component';

import * as store from './shared/data-access/store';
import { EffectsModule } from '@ngrx/effects';
import { getMainDefinition } from '@apollo/client/utilities';

import { HeaderModule } from './header/feature/header.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot(store.reducer),
        EffectsModule.forRoot(store.effects),
        HeaderModule
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                const http = httpLink.create({
                    uri: 'https://api-staging.csgoroll.com/graphql',
                    withCredentials: true
                });

                const ws = new WebSocketLink({
                    uri: 'wss://api-staging.csgoroll.com/graphql',
                    options: {
                        reconnect: true,
                        connectionParams: {
                            credentials: 'include'
                        }
                    }
                });

                const link = split(
                    ({ query }) => {
                        const { kind, operation } = getMainDefinition(
                            query
                        ) as any;
                        return (
                            kind === 'OperationDefinition' &&
                            operation === 'subscription'
                        );
                    },
                    ws,
                    http
                );

                return {
                    cache: new InMemoryCache(),
                    link
                };
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
