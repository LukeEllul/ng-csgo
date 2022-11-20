import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

interface ViewBoxNode {
    id: string;
    name: string;
    iconUrl: string;
    cost: number;
}

interface Response {
    box: ViewBoxNode;
}

@Injectable({
    providedIn: 'root'
})
export class ViewBoxGQL extends Query<Response> {
    override document = gql`
        query GetViewBox($id: ID!) {
            box(id: $id) {
                id
                name
                iconUrl
                cost
            }
        }
    `;
}
