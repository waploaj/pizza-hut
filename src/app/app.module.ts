import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import { HttpClientModule,  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
 import { AngularFireDatabaseModule } from 'angularfire2/database';
 import { AngularFireAuthModule } from 'angularfire2/auth';
 import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PizzastatusComponent } from './components/pizzastatus/pizzastatus.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { AboutComponent } from './components/about/about.component';
import { NearbyComponent } from './components/nearby/nearby.component';
import { CommunityComponent } from './components/community/community.component';
import {routing} from './app.routing';
import { LoaderComponent } from './components/loader/loader.component';
import { FindmeComponent } from './findme/findme.component';
import { SearchComponent } from './components/search/search.component';
import { MoviesService } from './services/movies.services';
import {ClubsService} from './services/clubs.services';

export const firebaseConfig = {
  apiKey: 'AIzaSyA-4BFwaOoZxEtRKyu0NrmyHizHquAfOs4',
  authDomain: 'fir-tutorial-6dd87.firebaseapp.com',
  databaseURL: 'https://fir-tutorial-6dd87.firebaseio.com',
  storageBucket: 'fir-tutorial-6dd87.appspot.com',
  messagingSenderId: '231223477216'
};

@NgModule({
  declarations: [
    AppComponent,
    PizzastatusComponent,
    NavbarComponent,
    AboutComponent,
    NearbyComponent,
    CommunityComponent,
    LoaderComponent,
    FindmeComponent,
    SearchComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    routing,
    NoopAnimationsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [
    MoviesService,
    ClubsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
