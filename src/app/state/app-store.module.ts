import {NgModule} from "@angular/core";
import {NgxsModule} from "@ngxs/store";
import {environment} from "src/environments/environment";
import {AppState} from "./app.state";

@NgModule(
  {
    imports: [NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    })]
  }
)
export class AppStoreModule {

}
