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
import { UserService } from './user.service';
import { UtmService } from './utm/utm.service';
import { UtmComponent } from './utm/utm.component';
import { ClipboardModule } from 'ngx-clipboard';

const appRoutes: Routes = [
  { path: 'wiki', component: WikiComponent },
  { path: 'utm', component: UtmComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    WikiComponent,
    NavComponent,
    WikiNavComponent,
    WikiContentComponent,
    UtmComponent
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
  providers: [SharepointService, UserService, UtmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
