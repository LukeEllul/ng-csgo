import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-item-variant',
    templateUrl: './item-variant.component.html',
    styleUrls: ['./item-variant.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemVariantComponent implements OnInit {
    @Input() name = '';
    @Input() value = 0;

    constructor() {}

    ngOnInit(): void {}
}
