const ACTION_PREFIX: string = "[APP]";

export namespace AppActions {
  export class SetReleaseDate {
    public static readonly type: string = `${ACTION_PREFIX} SET_RELEASE_DATE`;

    public constructor(public readonly releaseDate: string) {
    }
  }
}
