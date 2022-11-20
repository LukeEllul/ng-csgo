import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache, split } from '@apollo/client/core';
import { StoreModule } from '@ngrx/store';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { AppComponent } from './app.component';

import * as store from './shared/data-access/store';
import { EffectsModule } from '@ngrx/effects';
import { getMainDefinition } from '@apollo/client/utilities';

import { HeaderModule } from './header/feature/header.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ApolloModule,
        HttpClientModule,
        StoreModule.forRoot(store.reducer),
        EffectsModule.forRoot(store.effects),
        AppRoutingModule,
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
                    uri: 'ws://api-staging.csgoroll.com/graphql',
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
            },
            deps: [HttpLink]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
