import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashtoryModule } from './dashtory/dashtory.module';
import { FinanceModule } from './finance/finance.module';
import { DeptsModule } from './depts/depts.module';
import { PropertyModule } from './property/property.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    DashtoryModule,
    FinanceModule,
    DeptsModule,
    PropertyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
