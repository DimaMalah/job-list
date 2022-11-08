import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { JobItemPageComponent } from './pages/job-item-page/job-item-page.component'
import { JobListPageComponent } from './pages/job-list-page/job-list-page.component'
import { JobListItemComponent } from './components/job-list-item/job-list-item.component'
import { ErrorPageComponent } from './pages/error-page/error-page.component'
import { MapComponent } from './components/map/map.component';
import { ModalPictureComponent } from './components/modal-picture/modal-picture.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { JobItemMobileComponent } from './components/job-item-mobile/job-item-mobile.component'



@NgModule({
  declarations: [
    AppComponent,
    JobListPageComponent,
    JobItemPageComponent,
    JobListItemComponent,
    ErrorPageComponent,
    MapComponent,
    ModalPictureComponent,
    GlobalErrorComponent,
    JobItemMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
