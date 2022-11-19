import { Injectable } from '@angular/core';
import { gql, Subscription } from 'apollo-angular';

interface UpdateWallet {
    wallet: {
        id: string;
        amount: number;
        name: string;
    };
}

interface Response {
    updateWallet: UpdateWallet;
}

@Injectable({
    providedIn: 'root'
})
export class UpdateWalletGQL extends Subscription<Response> {
    override document = gql`
        subscription OnUpdateWallet {
            updateWallet {
                wallet {
                    id
                    amount
                    name
                }
            }
        }
    `;
}
