import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { LocalForecastComponent } from './local-forecast/local-forecast.component';
import { TodaysForecastComponent } from './local-forecast/todays-forecast/todays-forecast.component';
import { WeeklyForecastComponent } from './local-forecast/weekly-forecast/weekly-forecast.component';
import { FavoritesComponent } from './favorites/favorites.component';

const appRoutes: Routes = [
  { path: '', component: LocalForecastComponent },
  { path: 'home', component: LocalForecastComponent },
  { path: 'favorites', component: FavoritesComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LocalForecastComponent,
    TodaysForecastComponent,
    WeeklyForecastComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
