import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopData } from './data.model';
import { map, catchError, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  requestData() {
    return this.http.get<TopData>('http://www.reddit.com/r/summonerschool/top.json?limit=20').pipe(
      map((x: any) => {
        const arrayToFilter = x.data.children;
        const toModel: TopData[] = [];

        arrayToFilter.forEach((itm) => {
          toModel.push({
            id: itm.data.id,
            permalink: itm.data.permalink,
            title: itm.data.title,
            score: itm.data.score,
            ups: itm.data.ups,
            downs: itm.data.downs,
            num_comments: itm.data.num_comments,
            link_flair_text: itm.data.link_flair_text,
            selftext: itm.data.selftext
          });
        });
        return toModel;
      })
    );
  }

}