import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./home/feature/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'view-box/:id',
        loadChildren: () =>
            import('./view-box/feature/view-box.module').then(
                (m) => m.ViewBoxModule
            )
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
