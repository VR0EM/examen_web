import { bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

registerLocaleData(localeNl);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
