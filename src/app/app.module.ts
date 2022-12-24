import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherModule } from './teacher/teacher.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TeacherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
