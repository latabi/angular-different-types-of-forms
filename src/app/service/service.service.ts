import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ServiceService {
    private url = "http://localhost:5071/api/Students";
    url1 = "http://localhost:5071/api/Students/PostStudent";
    url2 = "http://localhost:5071/api/Students/PutStudent";
        url3 = "http://localhost:5071/api/Students/DeleteStudent";
    constructor(private http: Http) { }


    //get method
    getAll() {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    //post method
    onCreate(resource): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.url1, JSON.stringify(resource), { headers: headers })
            .map(response => response.json());
    }

    //update
    update(resource) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.url2 + '/' + resource.id, JSON.stringify(resource), { headers: headers })
            .map(response => response.json());
    }

    //delete
    delete(id) {
           var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.url3 + '/' + id, { headers: headers })
            .map(response => response.json());
    }

    //another update see which will work
   


}