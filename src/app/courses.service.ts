import { Injectable } from '@angular/core';
import { User } from './users.service';

@Injectable({
  providedIn: 'root'
})

export class TeeBox {
  yards: number;
  hcp: number;
  par: number;
  tee: string;
}

export class Hole {
  teeBoxes: Array<TeeBox>;
  holeNumber: number;
}
export class Course {
  id?: number;
  image?: string;
  name?: string;
  holes?: Array<Hole>;
}

export class CoursesService {
  private courses: Course[];
  private selectedCourseId = 18300;
  constructor() {
    this.courses = new Array<Course>();
    this.getCourses()
  }
  async getCourses() {
    let coursesRequest = await fetch ("https://golf-courses-api.herokuapp.com/courses").then(res => res.json());
    for (let courseData of coursesRequest.courses){
      let courseRequest = await fetch(`https://golf-courses-api.herokuapp.com/courses/${courseData.id}`).then(res => res.json());
      let course = new Course();
      course.id = courseData.id;
      course.name = courseData.name;
      course.image = courseData.image;
      let holeData = courseRequest.data.holes;
      let holes = Array<Hole>();

      for(let holeDatum of holeData){
        let hole = new Hole();
        let teeBoxes = Array<TeeBox>();
        for(let teeBoxData of holeDatum.teeBoxes){
          let teeBox = new TeeBox();
          teeBox.hcp = teeBoxData.hcp;
          teeBox.par = teeBoxData.par;
          teeBox.tee = teeBoxData.tee;
          teeBox.yards = teeBoxData.yards;
          teeBoxes.push(teeBox);
        }
        hole.holeNumber = holeDatum.hole_num;
        hole.teeBoxes = teeBoxes;
        holes.push(hole);
        course.holes = holes;
        this.courses.push(course);
    }
    
  }
  
}
getTeeTypes() {
  return [
  {value: 'men', viewValue: 'men'},
  {value: 'women', viewValue: 'women'},
  {value: 'pro', viewValue: 'pro'},
  {value: 'champion', viewValue: 'champion'}
]
}
getHolesForUser(user: User) {
  console.log('is this 18300', this.selectedCourseId, this.courses);
  let course = this.courses.find(c => c.id==this.selectedCourseId);
  if(!course) {
    return []
  }
  let teeType = user.teeType;
  let holes = [];
  for(let courseHole of course.holes){
    for(let tee of courseHole.teeBoxes){
      if(tee.tee == teeType) {
        holes.push(tee);

      }
    }
  }
  return holes;
}
}
