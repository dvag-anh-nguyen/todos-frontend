import {NgModule} from "@angular/core";
import {WithLoadingPipe} from "./pipes/with-loading.pipe";
import {ApiModule} from "./http/swagger/task/api.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    WithLoadingPipe,
  ],
  exports: [
    WithLoadingPipe
  ],
  imports: [
    ApiModule,
    HttpClientModule  // required by ApiModule
  ]
})
export class CoreModule {
}
