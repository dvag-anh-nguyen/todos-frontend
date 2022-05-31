import {Component} from '@angular/core';
import {AppState} from "./state/app.state";
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {AppActions} from "./state/app.actions";
import {Task} from "./core/http/swagger/task/models/task";
import {ApiService} from "./core/http/swagger/task/services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public version$: Observable<string> = this.store.select(AppState.getAppVersion);

  public appName$: Observable<string> = this.store.select(AppState.getAppName);

  public appReleaseDate$: Observable<string | undefined> = this.store.select(AppState.getAppReleaseDate);

  public tasks$: Observable<Array<Task> | undefined>;

  constructor(private readonly store: Store, private readonly apiService: ApiService) {
    this.tasks$ = new Observable<Array<Task> | undefined>();
  }

  public showReleaseDate(): void {
    this.store.dispatch(new AppActions.SetReleaseDate("27.05.2022"))
  }

  public clearReleaseDate(): void {
    this.store.dispatch(new AppActions.SetReleaseDate(""))
  }

  public loadTasks(): void {
    this.tasks$ = this.apiService.findTasks();
  }

}
