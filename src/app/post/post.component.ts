import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorStatus } from '../common/error-status';
import { Post } from './post';

@Component({
             selector: 'app-post',
             templateUrl: './post.component.html',
             styleUrls: ['./post.component.css']
           })

export class PostComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getAll<Post[]>().subscribe(
        posts => {
          this.posts = posts;
        });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value as String};
    this.posts.splice(0, 0, post as Post);

    input.value = '';

    this.postService.create(post)
        .subscribe(
            (response) => {
              post['id'] = response['id'];
            }, (error: HttpErrorResponse) => {
              this.posts.splice(0, 1);

              if (error.status === ErrorStatus.badRequest) {
                // this.form.setErrors(error.originalError)
              }
            });
  }

  updatePost(post) {
    this.postService.update(post, {isRead: true})
        .subscribe(response => {
          console.log(response);
        });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id)
        .subscribe(null, (error: HttpErrorResponse) => {
          this.posts.splice(index, 0, post);

          if (error.status === ErrorStatus.notFound) {
            alert('This post has already been deleted.');
          } else {  }
        });
  }

}
