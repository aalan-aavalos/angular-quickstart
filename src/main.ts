<<<<<<< HEAD
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

=======
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
>>>>>>> 8c06e19a54abeb41eb4d15de592faba77239b29a

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
