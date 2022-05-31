/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';

import {Board} from '../models/board';
import {NewBoard} from '../models/new-board';
import {NewTask} from '../models/new-task';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findTasks
   */
  static readonly FindTasksPath = '/v1/task';

  /**
   * Returns all tasks from the system that the user has access to
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findTasks()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTasks$Response(params?: {

    /**
     * tags to filter by
     */
    tags?: Array<string>;

    /**
     * maximum number of results to return
     */
    limit?: number;
  }): Observable<StrictHttpResponse<Array<Task>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FindTasksPath, 'get');
    if (params) {
      rb.query('tags', params.tags, {"style": "form"});
      rb.query('limit', params.limit, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Task>>;
      })
    );
  }

  /**
   * Returns all tasks from the system that the user has access to
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findTasks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTasks(params?: {

    /**
     * tags to filter by
     */
    tags?: Array<string>;

    /**
     * maximum number of results to return
     */
    limit?: number;
  }): Observable<Array<Task>> {

    return this.findTasks$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Task>>) => r.body as Array<Task>)
    );
  }

  /**
   * Path part for operation addTask
   */
  static readonly AddTaskPath = '/v1/task';

  /**
   * Creates a new Task
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTask()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTask$Response(params: {

    /**
     * Task to add
     */
    body: NewTask
  }): Observable<StrictHttpResponse<Task>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AddTaskPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Task>;
      })
    );
  }

  /**
   * Creates a new Task
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addTask$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTask(params: {

    /**
     * Task to add
     */
    body: NewTask
  }): Observable<Task> {

    return this.addTask$Response(params).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Path part for operation findTaskById
   */
  static readonly FindTaskByIdPath = '/v1/task/{id}';

  /**
   * Returns a Task based on a single ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findTaskById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTaskById$Response(params: {

    /**
     * ID of Task to fetch
     */
    id: number;
  }): Observable<StrictHttpResponse<Task>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FindTaskByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Task>;
      })
    );
  }

  /**
   * Returns a Task based on a single ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findTaskById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTaskById(params: {

    /**
     * ID of Task to fetch
     */
    id: number;
  }): Observable<Task> {

    return this.findTaskById$Response(params).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Path part for operation deleteTask
   */
  static readonly DeleteTaskPath = '/v1/task/{id}';

  /**
   * deletes a single Task based on the ID supplied
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTask()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTask$Response(params: {

    /**
     * ID of Task to delete
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteTaskPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * deletes a single Task based on the ID supplied
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTask$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTask(params: {

    /**
     * ID of Task to delete
     */
    id: number;
  }): Observable<void> {

    return this.deleteTask$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findBoards
   */
  static readonly FindBoardsPath = '/v1/board';

  /**
   * Get all task boards
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBoards()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBoards$Response(params?: {

    /**
     * tags to filter by
     */
    tags?: Array<string>;

    /**
     * maximum number of results to return
     */
    limit?: number;
  }): Observable<StrictHttpResponse<Array<Board>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FindBoardsPath, 'get');
    if (params) {
      rb.query('tags', params.tags, {"style": "form"});
      rb.query('limit', params.limit, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Board>>;
      })
    );
  }

  /**
   * Get all task boards
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findBoards$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBoards(params?: {

    /**
     * tags to filter by
     */
    tags?: Array<string>;

    /**
     * maximum number of results to return
     */
    limit?: number;
  }): Observable<Array<Board>> {

    return this.findBoards$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Board>>) => r.body as Array<Board>)
    );
  }

  /**
   * Path part for operation addBoard
   */
  static readonly AddBoardPath = '/v1/board';

  /**
   * Creates a new Board
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addBoard()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addBoard$Response(params: {

    /**
     * Board to add
     */
    body: NewBoard
  }): Observable<StrictHttpResponse<Board>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AddBoardPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Board>;
      })
    );
  }

  /**
   * Creates a new Board
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addBoard$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addBoard(params: {

    /**
     * Board to add
     */
    body: NewBoard
  }): Observable<Board> {

    return this.addBoard$Response(params).pipe(
      map((r: StrictHttpResponse<Board>) => r.body as Board)
    );
  }

}
