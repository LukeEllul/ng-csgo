import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceComponent implements OnInit {
    @Input() balance = 0;

    constructor() {}

    ngOnInit(): void {}
}
