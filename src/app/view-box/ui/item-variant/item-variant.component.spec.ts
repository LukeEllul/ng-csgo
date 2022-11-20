import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVariantComponent } from './item-variant.component';

describe('ItemVariantComponent', () => {
    let component: ItemVariantComponent;
    let fixture: ComponentFixture<ItemVariantComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ItemVariantComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ItemVariantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
