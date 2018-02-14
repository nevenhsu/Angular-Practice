import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostComponent } from './post/post.component';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GithubProfileService } from './services/github-profile.service';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NotAccessComponent } from './not-access/not-access.component';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'followers/:id/:username', component: GithubProfileComponent },
  { path: 'followers', component: GithubFollowersComponent },
  { path: 'posts', component: PostComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavigationComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent,
    HomeComponent,
    NavBarComponent,
    AdminComponent,
    LoginComponent,
    NotAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true })
  ],
  providers: [
    CoursesService,
    PostService,
    GithubProfileService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    AuthService,
    OrderService,

    // For creating a mock back-end. You don't need these in a real app.

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
