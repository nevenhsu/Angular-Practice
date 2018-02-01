
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
        <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course | summary:2 }}
                </li>
            </ul>
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <button (click)="onClick($event)" class="btn btn-primary" [class.active]="isActive">Click me!</button>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})

export class CourseComponent {

    email = 'crazy@gmail.com';

    title = 'Authors';
    courses;
    colSpan = 2;
    isActive = true;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onKeyUp() {
        console.log(this.email);
    }

    onClick($event) {
        $event.stopPropagation();
        console.log(`Event: ${$event}`, $event);
    }
}
