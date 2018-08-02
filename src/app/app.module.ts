import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { HttpClientModule} from '@angular/common/http';
import { SharepointService } from './shared/services/sharepoint.service';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './shared/nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { WikiNavComponent } from './wiki/wiki-nav/wiki-nav.component';
import { WikiContentComponent } from './wiki/wiki-content/wiki-content.component';
import { Ng2Webstorage } from 'ngx-webstorage';
import { UserService } from './shared/services/user.service';
import { UtmService } from './utm/utm.service';
import { UtmComponent } from './utm/utm.component';
import { ClipboardModule } from 'ngx-clipboard';
import { UtmControlFormComponent } from './utm/utm-control-form/utm-control-form.component';
import { DoomsayerComponent } from './shared/doomsayer/doomsayer.component';
import { DoomsayerService } from './shared/doomsayer/doomsayer.service';
import { WikiEditorComponent } from './wiki/wiki-editor/wiki-editor.component';
import { WikiCreateComponent } from './wiki/wiki-create/wiki-create.component';
import {WikiNavDeepFilterPipe, WikiNavFilterPipe} from './wiki/wiki-nav/wiki-nav-filter.pipe';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {DialogModalComponent} from './shared/dialog-modal/dialog-modal.component';
import { WikiTopicsComponent } from './wiki/wiki-topics/wiki-topics.component';
import { TopicIdPipe } from './wiki/topic-id.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSelectModule} from '@angular/material';
import { SortPipe } from './sort.pipe';
import { WhatsOnComponent } from './whats-on/whats-on.component';
import { HorizontalSubNavComponent } from './shared/horizontal-sub-nav/horizontal-sub-nav.component';
import { UtmGeneratorComponent } from './utm/utm-generator/utm-generator.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const appRoutes: Routes = [
  { path: 'wiki', component: WikiComponent,
    children: [
      { path: 'post/:id/edit', component: WikiEditorComponent },
      { path: 'post/:id', component: WikiContentComponent },
      { path: 'create', component: WikiCreateComponent },
      { path: 'topics', component: WikiTopicsComponent },
    ]
  },
  { path: 'utm', component: UtmComponent,
    children: [
      { path: '', component: UtmGeneratorComponent },
      { path: 'campaigns', component: UtmControlFormComponent },
      { path: 'content', component: UtmControlFormComponent },
      { path: 'mediums', component: UtmControlFormComponent },
      { path: 'sources', component: UtmControlFormComponent }
    ]
  },
  { path: 'analytics', component: AnalyticsComponent },
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
    WikiComponent,
    NavComponent,
    WikiNavComponent,
    WikiContentComponent,
    UtmComponent,
    UtmControlFormComponent,
    DoomsayerComponent,
    WikiEditorComponent,
    WikiCreateComponent,
    WikiNavFilterPipe,
    WikiNavDeepFilterPipe,
    DialogModalComponent,
    WikiTopicsComponent,
    TopicIdPipe,
    SortPipe,
    WhatsOnComponent,
    HorizontalSubNavComponent,
    UtmGeneratorComponent,
    AnalyticsComponent
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
  providers: [SharepointService, UserService, UtmService, DoomsayerService, SortPipe, TopicIdPipe, WikiNavFilterPipe, WikiNavDeepFilterPipe ],
  bootstrap: [AppComponent],
  entryComponents: [DialogModalComponent]
})
export class AppModule { }
