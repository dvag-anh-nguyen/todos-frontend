import {Action, Select, Selector, State, StateContext, StateToken} from "@ngxs/store";
import {AppStateModel, initAppStateModel} from "./app.state.model";
import {Injectable} from "@angular/core";
import {immutableContext} from "./state.helpers";
import {AppActions} from "./app.actions";

export const APP_STATE_TOKEN: StateToken<AppStateModel> = new StateToken('APP');

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: initAppStateModel()
})
@Injectable()
export class AppState {

  @Selector([APP_STATE_TOKEN])
  public static getAppName(state: AppStateModel): string {
    return state.appName;
  }

  @Selector([APP_STATE_TOKEN])
  public static getAppVersion(state: AppStateModel): string {
    return state.appVersion;
  }

  @Selector([APP_STATE_TOKEN])
  public static getAppReleaseDate(state: AppStateModel): string | undefined {
    return state.appReleaseDate;
  }

  @Action(AppActions.SetReleaseDate)
  public setAppReleaseDate(
    ctx: StateContext<AppStateModel>,
    action: AppActions.SetReleaseDate
  ): void {
    ctx.setState(immutableContext(state => state.appReleaseDate = action.releaseDate))
  }
}
