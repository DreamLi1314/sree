import { Injectable} from "@angular/core";
import { Headers, Http, URLSearchParams, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { AsyncSubject } from 'rxjs/AsyncSubject';

const URL_PREFIX = "..";

@Injectable()
export class ModelService {

  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  private extractData(res: Response): Observable<any> {
    const body: any = res.json();

    return (typeof body === "boolean") ? body : body || {}; // 将 null 转化为对象{}
  }

  private handleError(res: any) {
    let error;

    try {
      error = res.json();
    } catch (err) {

    }

    const errMsg: string = !!error && !!error.message
      ? error.message
      : !!error && !!res ? `${res.status} - ${res.statusText}` : "Server Error!";

    if (!error) {
       alert("Error: " + errMsg);
    }

    console.log(errMsg);

    return Observable.throw(errMsg);
  }

  getModel(controller: string, params?: URLSearchParams): Observable<any> {
    return this.http.get(URL_PREFIX + controller, {search: params})
      .map(this.extractData)
      .catch((error) => this.handleError(error));
  }

  /**
   * Use POST method to send model.
   */
  sendModel(controller: string, model: any, params?: URLSearchParams): Observable<Response> {
      const subject = new AsyncSubject<Response>();
      const post = this.http.post(URL_PREFIX + controller, model,
         {headers: this.headers, search: params})
         .catch((err) => this.handleError(err));
      // Disallows multiple post requests on same observable
      post.subscribe((res) => {
         subject.next(res);
         subject.complete();
      });

      return subject;
   }

   /**
    * Use put method to send model.
    */
   putModel(controller: string, model: any, params?: URLSearchParams): Observable<Response> {
      const subject = new AsyncSubject<Response>();
      const put = this.http.put(URL_PREFIX + controller, model,
         {headers: this.headers, search: params})
         .catch((err) => this.handleError(err));
      // Disallows multiple put requests on same observable
      put.subscribe((res) => {
         subject.next(res);
         subject.complete();
      });

      return subject;
   }
}
