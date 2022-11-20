import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

interface BoxNode {
    id: string;
    name: string;
    iconUrl: string;
    cost: number;
}

interface Response {
    boxes: {
        edges: { node: BoxNode }[];
    };
}

@Injectable({
    providedIn: 'root'
})
export class BoxesGQL extends Query<Response> {
    override document = gql`
        query {
            boxes(free: false, purchasable: true, openable: true) {
                edges {
                    node {
                        id
                        name
                        iconUrl
                        cost
                    }
                }
            }
        }
    `;
}
