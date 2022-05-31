import produce from 'immer';
import {Mutable} from 'type-fest';

export const immutableContext: <T>(cb: (state: Mutable<T>) => void) => (state: T) => T = cb => state =>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  produce(state, (draft: any) => {
    cb(draft);
    return draft;
  });
