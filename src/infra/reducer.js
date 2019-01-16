import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import appReducer from "../app/reducer.app";
import { fetchHackerNews } from "../app/epic.app";

export const rootEpic = combineEpics(fetchHackerNews);
export const rootReducer = combineReducers({ appReducer });
