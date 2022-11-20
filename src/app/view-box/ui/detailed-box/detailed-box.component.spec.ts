import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedBoxComponent } from './detailed-box.component';

describe('DetailedBoxComponent', () => {
    let component: DetailedBoxComponent;
    let fixture: ComponentFixture<DetailedBoxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DetailedBoxComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(DetailedBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
