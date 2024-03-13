import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';

export const routes: Routes = [
  { path: '', component: SearchtitleComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
