import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadertComponent } from './components/headert/headert.component';
import { HomeComponent } from './components/home/home.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadertComponent,
    HomeComponent,
    InactivePostsComponent,
    PostDetailsComponent,
    ActivePostsComponent,
    SinglePostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
