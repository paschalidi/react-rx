import "./App.css";
import { connect } from "react-redux";
import { rxConnect, ofActions } from "rx-connect";
import { Observable, Subject, merge, empty } from "rxjs";
import { flatMap, pluck } from "rxjs/operators";
import React, { Component } from "react";
import * as types from "../infra/types";

@connect(
  ({ appReducer }) => ({ appReducer }),
  null
)
@rxConnect(props$ => {
  const actions = {
    syncAction$: new Subject(),
    asyncAction$: new Subject()
  };

  return merge(
    props$,
    Observable::ofActions(actions),
    actions.syncAction$.pipe(
      pluck(0),
      flatMap(() => {
        const { dispatch } = props$.value;
        dispatch({ type: types.SYNC_ACTION });
        return empty();
      })
    ),
    actions.asyncAction$.pipe(
      pluck(0),
      flatMap(() => {
        const { dispatch } = props$.value;
        dispatch({ type: types.ASYNC_ACTION });
        return empty();
      })
    )
  );
})
class App extends Component {
  render() {
    const { syncAction, asyncAction, appReducer } = this.props;

    return (
      <div className="App">
        <div className="App-heading App-flex">
          <h2>
            Welcome to <span className="App-react">react-rx</span>
          </h2>
        </div>
        <div className="App-instructions App-flex">
          <button onClick={syncAction}>
            click here to dispatch a sync action
          </button>
          <button onClick={asyncAction}>
            click here to dispatch an async action
          </button>
        </div>
          {appReducer.data && <div>data has been fetched</div>}
      </div>
    );
  }
}

export default App;
