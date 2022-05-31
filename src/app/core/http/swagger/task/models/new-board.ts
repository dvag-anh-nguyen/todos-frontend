/* tslint:disable */
/* eslint-disable */
import {SlimTask} from './slim-task';

export interface NewBoard {
  deleted?: boolean;
  description?: string;
  pinned?: boolean;
  tag?: string;
  tasks?: Array<SlimTask>;
  title: string;
}
