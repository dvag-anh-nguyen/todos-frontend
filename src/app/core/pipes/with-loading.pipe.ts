import {Pipe, PipeTransform} from "@angular/core";
import {catchError, isObservable, Observable, of, startWith} from "rxjs";
import {map} from "rxjs/operators";

export interface RemoteData {
  loading: boolean;
  error?: any;
  value?: any;
}

@Pipe({
  name: "withLoading"
})
export class WithLoadingPipe implements PipeTransform {

  transform(val: any, ...args: any[]) {
    return isObservable(val)
      ? val.pipe(
        map((value: any) => ({loading: false, value})),
        startWith({loading: true}),
        catchError(error => of({loading: false, error}))
      )
      : val;
  }

}
