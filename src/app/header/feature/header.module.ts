import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BalanceModule } from '../ui/balance/balance.module';
import { LogoModule } from '../ui/logo/logo.module';
import { ErrorModule } from '../../shared/ui/error/error.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, BalanceModule, LogoModule, ErrorModule],
    exports: [HeaderComponent]
})
export class HeaderModule {}
