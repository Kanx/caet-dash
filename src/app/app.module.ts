import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { HttpClientModule} from '@angular/common/http';
import { SharepointService } from './shared/services/sharepoint.service';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { WikiNavComponent } from './wiki/wiki-nav/wiki-nav.component';
import { WikiContentComponent } from './wiki/wiki-content/wiki-content.component';
import { Ng2Webstorage } from 'ngx-webstorage';
import { UserService } from './shared/services/user.service';
import { UtmService } from './utm/utm.service';
import { UtmComponent } from './utm/utm.component';
import { ClipboardModule } from 'ngx-clipboard';
import { UtmControlFormComponent } from './utm/utm-control-form/utm-control-form.component';
import { DoomsayerComponent } from './doomsayer/doomsayer.component';
import { DoomsayerService } from './doomsayer/doomsayer.service';

const appRoutes: Routes = [
  { path: 'wiki', component: WikiComponent },
  { path: 'utm', component: UtmComponent,
    children: [
      { path: 'campaigns', component: UtmControlFormComponent },
      { path: 'content', component: UtmControlFormComponent },
      { path: 'sources', component: UtmControlFormComponent }
    ]
  },
  { path: '**', redirectTo: '/' }
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
    DoomsayerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    Ng2Webstorage
  ],
  providers: [SharepointService, UserService, UtmService, DoomsayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
