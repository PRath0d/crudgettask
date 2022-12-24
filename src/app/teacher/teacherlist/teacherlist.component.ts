import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/shared/commonservice.service';
import { Teacher } from 'src/app/teacher';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent {

  constructor(private cs:CommonserviceService)
  {}

  teach:Teacher[];
  ngOnInit()
  {
     this.cs.getdata().subscribe((t:Teacher[])=>{
      this.teach=t;

     })
  }
}
