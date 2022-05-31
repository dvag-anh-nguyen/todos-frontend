/* tslint:disable */
/* eslint-disable */
import {TaskStatus} from './task-status';

export interface SlimTask {
  deleted: boolean;
  description?: string;
  status: TaskStatus;
  title: string;
}
