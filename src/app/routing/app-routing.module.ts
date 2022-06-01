import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTES} from "./routes.const";
import {PagesModule} from "../core/pages/pages.module";
import {TasksOverviewPageComponent} from "../core/pages/tasks-overview-page/tasks-overview-page.component";
import {BoardsOverviewPageComponent} from "../core/pages/boards-overview-page/boards-overview-page.component";
import {DashboardPageComponent} from "../core/pages/dashboard-page/dashboard-page.component";

const routes: Routes = [
  { path: '', redirectTo: ROUTES.DASHBOARD.DEFAULT, pathMatch: 'full' },
  {
    path: ROUTES.DASHBOARD.DEFAULT,
    component: DashboardPageComponent
  },
  {
    path: ROUTES.TASKS.DEFAULT,
    component: TasksOverviewPageComponent
  },
  {
    path: ROUTES.BOARDS.DEFAULT,
    component: BoardsOverviewPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
