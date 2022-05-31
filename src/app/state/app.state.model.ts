export interface AppStateModel {
  appName: string;
  appVersion: string;
  appReleaseDate?: string;
}

export const initAppStateModel: () => AppStateModel = () => {
  console.log('initAppStateModel ...');
  return {
    appName: 'MyTodos',
    appVersion: '0.0.1'
  }
}
