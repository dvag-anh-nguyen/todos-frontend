/* tslint:disable */
/* eslint-disable */
import {NewTask} from './new-task';
import {SlimTask} from './slim-task';

export type Task = NewTask & SlimTask & {
  'id': number;
};
