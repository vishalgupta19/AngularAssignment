import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap/modal";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostDataDetailsComponent } from './post-data-details/post-data-details.component';

@NgModule({
  declarations: [AppComponent, PostDataDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
