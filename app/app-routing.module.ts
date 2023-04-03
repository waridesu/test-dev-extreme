import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from "./components/about-page/about-page.component";
import { IndexPageComponent } from "./components/index-page/index-page.component";

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
