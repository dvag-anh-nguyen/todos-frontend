import {NgModule} from "@angular/core";
import {WithLoadingPipe} from "./pipes/with-loading.pipe";
import {ApiModule} from "./http/swagger/task/api.module";
import {HttpClientModule} from "@angular/common/http";
import {TranslocoRootModule} from "./transloco/transloco-root.module";

@NgModule({
  declarations: [
    WithLoadingPipe
  ],
  exports: [
    WithLoadingPipe
  ],
  imports: [
    TranslocoRootModule,
    ApiModule,
    HttpClientModule  // required by ApiModule
  ]
})
export class CoreModule {
}
