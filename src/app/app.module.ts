// vendor
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
         MatNativeDateModule,
         MatRadioModule,
         MatDatepickerModule,
         MatTableModule,
         MatListModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';




import { PageSliderModule } from 'ng2-page-slider';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// common
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './_directives/navigation/navigation.component';
import { AuthGuard, RolesGuard } from './_guards/index';
import { DeleteDialogComponent } from './_directives/dialogs/index';

// services
import { AuthenticationService, ProfileService } from './_services/index';

// pages
import { PublicComponent, PrivateComponent } from './_layouts/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/index';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent, InfoComponent } from './profile/index';


@NgModule({
  declarations: [
    AppComponent,
    PrivateComponent,
    PublicComponent,
    NavigationComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    InfoComponent,
    DeleteDialogComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSortModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatStepperModule,
    BrowserAnimationsModule,
    CdkTableModule,
    ClickOutsideModule,
    HttpModule,
    PageSliderModule,
    Ng2PageScrollModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
