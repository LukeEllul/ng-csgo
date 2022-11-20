import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBoxComponent } from './view-box.component';

const routes: Routes = [
    {
        path: '',
        component: ViewBoxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewBoxRoutingModule {}
