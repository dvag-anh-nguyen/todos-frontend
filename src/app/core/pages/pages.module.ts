import {NgModule} from "@angular/core";
import {BoardsOverviewPageComponent} from "./boards-overview-page/boards-overview-page.component";
import {TasksOverviewPageComponent} from "./tasks-overview-page/tasks-overview-page.component";
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    BoardsOverviewPageComponent,
    TasksOverviewPageComponent,
    DashboardPageComponent
  ]
})
export class PagesModule {

}
