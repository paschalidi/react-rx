import { of } from "rxjs";
import { switchMap, flatMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import * as types from "../infra/types";

// eslint-disable-next-line
export function fetchHackerNews(action$) {
  return action$.pipe(
    ofType(types.ASYNC_ACTION),
    switchMap(() =>
      ajax({
        url: "https://hacker-news.firebaseio.com/v0/topstories.json",
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
    ),
    flatMap(({ response }) =>
      of({ type: types.ASYNC_ACTION_SUCCESS, payload: response })
    )
  );
}
