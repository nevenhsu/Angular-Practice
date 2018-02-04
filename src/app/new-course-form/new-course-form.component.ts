import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      topicInput: ['', [Validators.required, Validators.minLength(3)]],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  get topicInput() {
    return this.form.get('topicInput');
  }

  addTopic(topic: HTMLInputElement) {
    if (this.form.valid) {
      this.topics.push(new FormControl(topic.value));
      topic.value = '';
    }
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  print(m) {
    console.log(m);
  }
}
