import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { CountryComponent } from './pages/country/country.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpIntercept } from './services/http-interceptor';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    FilterComponent,
    CountryComponent,
    NavbarComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercept, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
