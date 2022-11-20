import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BalanceModule } from '../ui/balance/balance.module';
import { LogoModule } from '../ui/logo/logo.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, BalanceModule, LogoModule],
    exports: [HeaderComponent]
})
export class HeaderModule {}
