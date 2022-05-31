import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {AppStoreModule} from './state/app-store.module';
import {TaskItemComponent} from './+tasks/task-item/task-item.component';
import {TaskListComponent} from './+tasks/task-list/task-list.component';
import {BoardItemComponent} from './+boards/board-item/board-item.component';
import {BoardListComponent} from './+boards/board-list/board-list.component';
import {CoreModule} from "./core/core.module";
import {TranslocoRootModule} from "./core/transloco/transloco-root.module";

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    BoardItemComponent,
    BoardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    CoreModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
