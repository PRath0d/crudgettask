import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TeacherlistComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    TeacherlistComponent
  ]
})
export class TeacherModule { }
