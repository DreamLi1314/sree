import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AdhocClientService {
   public refreshSubject: Subject<any>;
   private _runtimeId: string;

   constructor() {
      this.refreshSubject = new Subject<any>();
   }

   public set runtimeId(runtimeId: string) {
      this._runtimeId = runtimeId;
   }

   public get runtimeId(): string {
      return this._runtimeId;
   }

   public get onRefresh(): Subject<any> {
      return this.refreshSubject;
   }

   public refresh: () => any = () => this.refreshSubject.next();
}
