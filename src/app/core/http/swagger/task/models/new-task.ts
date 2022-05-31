/* tslint:disable */
/* eslint-disable */
import {TaskStatus} from './task-status';

export interface NewTask {
  deleted?: boolean;
  description?: string;
  status: TaskStatus;
  tag?: string;
  title: string;
}
