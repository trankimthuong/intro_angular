import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { FormsModule } from '@angular/forms';
import { LikebuttonComponent } from './likebutton/likebutton.component';
import { CreateformComponent } from './createform/createform.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HackernewsComponent,
    LikebuttonComponent,
    CreateformComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
