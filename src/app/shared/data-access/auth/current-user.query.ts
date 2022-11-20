import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

interface CurrentUser {
    id: string;
    name: string;
    wallets: {
        id: string;
        amount: number;
        currency: string;
    }[];
}

interface Response {
    currentUser: CurrentUser | null;
}

@Injectable({
    providedIn: 'root'
})
export class CurrentUserGQL extends Query<Response> {
    override document = gql`
        query currentUser {
            currentUser {
                id
                name
                wallets {
                    id
                    amount
                    currency
                }
            }
        }
    `;
}
