import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@myworkspace/api-interfaces';


@Component({
  selector: 'myworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {

    this.http.post('http://localhost:3333/users', {
      name: 'John',
      login: 'john12345',
    }).subscribe((res) => {
        console.log(res);
    });
  }


}
