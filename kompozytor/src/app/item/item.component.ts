import {Component, OnInit, Input} from '@angular/core';


import {Course} from '../../../../../fullstack-graphql/frontend/src/app/types';
import {CourseService} from '../../../../../fullstack-graphql/frontend/src/app/course.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() course: Course;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
  }

  upvote(id: string) {
    this.courseService.upvoteCourse(id)
      .subscribe(({data}) => {
        console.log('upvoted', data);
      }, (error) => {
        console.log('failed to upvote', error);
      });
  }

  downvote(id: string) {
    this.courseService.downvoteCourse(id)
      .subscribe(({data}) => {
        console.log('downvoted', data);
      }, (error) => {
        console.log('failed to downvote', error);
      });
  }

}
