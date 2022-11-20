import { Component, Input, OnInit } from '@angular/core';
import { Box } from '../../data-access/models/box.model';

const defaultBox: Box = {
    id: '',
    cost: 0,
    iconUrl: '',
    name: ''
};

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
    @Input() box: Box = defaultBox;

    constructor() {}

    ngOnInit(): void {}
}
