import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/homepage/header/header.component';
import { FeedbackComponent } from './components/homepage/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { FormComponent } from './components/book-appointment/form/form.component';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedbackComponent,
    FooterComponent,
    NavbarComponent,
    IndexComponent,
    BookAppointmentComponent,
    FormComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
