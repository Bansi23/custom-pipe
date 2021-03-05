import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudDemoComponent } from './component/crud-demo/crud-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'crud-demo', pathMatch: 'full' },
  { path: 'crud-demo', component: CrudDemoComponent },
  { path: '**', component: CrudDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
