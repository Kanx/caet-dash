import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { HttpClientModule} from '@angular/common/http';
import { SharepointService } from './shared/services/sharepoint.service';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    CKEditorModule,
    FormsModule
  ],

  providers: [SharepointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
