import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

interface OpenBox {
    boxOpenings: {
        id: string;
        itemVariant: {
            id: string;
            name: string;
            value: number;
        } | null;
    }[];
}

interface Response {
    openBox: OpenBox;
}

interface OpenBoxInput {
    boxId: string;
    amount: number;
    multiplierBoxBet: number;
}

@Injectable({
    providedIn: 'root'
})
export class OpenBoxGQL extends Mutation<Response, { input: OpenBoxInput }> {
    override document = gql`
        mutation OpenBox($input: OpenBoxInput!) {
            openBox(input: $input) {
                boxOpenings {
                    id
                    itemVariant {
                        id
                        name
                        value
                    }
                }
            }
        }
    `;
}
