import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { EvaluateComponent } from './pages/evaluate/evaluate.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    {
      path: '',
      component: HomeComponent,
    }]
  },
  { path: 'evaluate', component: LayoutComponent, children: [
    {
      path: '',
      component: EvaluateComponent,
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
