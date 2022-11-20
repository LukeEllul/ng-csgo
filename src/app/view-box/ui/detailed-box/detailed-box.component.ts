import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { Box } from '../../../shared/data-access/models/box.model';

const defaultBox: Box = {
    id: '',
    cost: 0,
    iconUrl: '',
    name: ''
};

@Component({
    selector: 'app-detailed-box',
    templateUrl: './detailed-box.component.html',
    styleUrls: ['./detailed-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedBoxComponent implements OnInit {
    @Input() detailedBox: Box = defaultBox;

    @Output() clickOpen = new EventEmitter<Box>();

    constructor() {}

    ngOnInit(): void {}
}
