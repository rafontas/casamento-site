import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class ToolBarService {

    private _listners = new Subject<any>();

    listen(): Observable<any> {
       return this._listners.asObservable();
    }

    filter(filterBy: string) {
       this._listners.next(filterBy);
    }
}