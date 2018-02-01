import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { LikeComponent } from './app/like.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


let likeComponent = new LikeComponent(10,true);
likeComponent.onClick();
console.log(`likesCount: ${this.likesCount}, isSelected: ${this.isSelected}`);
