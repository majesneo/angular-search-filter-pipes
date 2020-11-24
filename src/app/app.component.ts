import {Component} from '@angular/core';

export interface Post {
  title: string
  text: string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  e: number = Math.E
  str = 'Hi World'
  float = 0.45
  obj = {
    a: {a: 1},
    c: 3
  }
  posts = [
    {title: 'Beer', text: 'Самое лучшие пивов мире'},
    {title: 'Bread', text: 'Самое лучшие Bread мире'},
    {title: 'Jsz', text: 'Самое лучшие Jsz мире'},
  ]
  search = ''
  searchField = 'title'
}
