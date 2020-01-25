import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  theme: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  theme$: Observable<string>;

  constructor(private store: Store<AppState>) {
      this.theme$ = this.store.select('theme');
  }

  blackTheme() {
      this.store.dispatch({type: 'BLACK'});
      console.log(this.store);
    }

    whiteTheme() {
      this.store.dispatch({type: 'WHITE'});
      console.log(this.store);
    }
}
