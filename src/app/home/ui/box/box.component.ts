import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
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
    styleUrls: ['./box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit {
    @Input() box: Box = defaultBox;

    @Output() click = new EventEmitter<Box>();

    constructor() {}

    ngOnInit(): void {}
}
