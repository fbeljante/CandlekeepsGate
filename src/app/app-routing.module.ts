import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { RacePageComponent } from './pages/race-page/race-page.component';
import { AppearancePageComponent } from './pages/appearance-page/appearance-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';
import { AlignmentPageComponent } from './pages/alignment-page/alignment-page.component';



const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent,
  },
  {
    path: 'appearance',
    component: AppearancePageComponent,
  },
  {
    path: 'race',
    component: RacePageComponent,
  },
  {
    path: 'class',
    component: ClassPageComponent,
  },
  {
    path: 'alignment',
    component: AlignmentPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
