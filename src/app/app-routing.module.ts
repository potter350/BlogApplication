import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importing components that are going to be used in routes
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'about', component: AboutComponent},
  {path:'create', component: BlogCreateComponent},
  
  {path:'notfound', component: NotFoundComponent},
  {path:'blog/:blogId',component:BlogViewComponent},
  {path:'edit/:blogId',component:BlogEditComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
