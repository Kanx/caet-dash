import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SharepointService } from './shared/services/sharepoint.service';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './shared/nav/nav.component';
import { Routes, RouterModule } from '@angular/router';

import { Ng2Webstorage } from 'ngx-webstorage';
import { UserService } from './shared/services/user.service';
import { UtmService } from './utm/utm.service';
import { UtmComponent } from './utm/utm.component';
import { ClipboardModule } from 'ngx-clipboard';
import { UtmControlFormComponent } from './utm/utm-control-form/utm-control-form.component';
import { DoomsayerComponent } from './shared/doomsayer/doomsayer.component';
import { DoomsayerService } from './shared/doomsayer/doomsayer.service';

import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {DialogModalComponent} from './shared/dialog-modal/dialog-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSelectModule} from '@angular/material';
import { SortPipe } from './sort.pipe';
import { HorizontalSubNavComponent } from './shared/horizontal-sub-nav/horizontal-sub-nav.component';
import { UtmGeneratorComponent } from './utm/utm-generator/utm-generator.component';

const appRoutes: Routes = [
  { path: 'utm', component: UtmComponent,
    children: [
      { path: '', component: UtmGeneratorComponent },
      { path: 'campaigns', component: UtmControlFormComponent },
      { path: 'content', component: UtmControlFormComponent },
      { path: 'mediums', component: UtmControlFormComponent },
      { path: 'sources', component: UtmControlFormComponent }
    ]
  },
  { path: '**', redirectTo: '/' }
];

const MatModules = [
  MatButtonModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({

  declarations: [
    AppComponent,
    NavComponent,
    UtmComponent,
    UtmControlFormComponent,
    DoomsayerComponent,
    DialogModalComponent,
    SortPipe,
    HorizontalSubNavComponent,
    UtmGeneratorComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    ...MatModules,
    HttpClientModule,
    HttpModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    Ng2Webstorage,
    BootstrapModalModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [SharepointService, UserService, UtmService, DoomsayerService, SortPipe],
  bootstrap: [AppComponent],
  entryComponents: [DialogModalComponent]
})
export class AppModule {}
