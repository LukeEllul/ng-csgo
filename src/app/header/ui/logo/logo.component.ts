import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnInit,
    Output
} from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {
    @Output() click = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}
