import { Component } from '@angular/core';
import { FavoriteChangedArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  courses = [{name: 'lol'}, {name: 'yeah'}];
  viewMode = 'something else';

  post = {
    title: 'app',
    isFavorite: true
  };

  onFavoriteChanged(isFavoriteArgs: FavoriteChangedArgs) {
    console.log('Favorite changed:', isFavoriteArgs);
  }

  onAdd() {
    this.courses.push({name: 'new'});
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }


}
