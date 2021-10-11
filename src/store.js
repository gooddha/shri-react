import { createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

const initialState = {
  isSettingsSaved: false,
  formState: {
    repo: '',
    buildCommand: '',
    mainBranch: '',
    syncTime: 10
  },
  builds: [
    {
      status: "ok",
      number: "1386",
      description: "add documentation for postgres scaler",
      branch: "master",
      hash: "9c9f0b9",
      author: "Philip Kirkorov",
      date: "21 янв, 03:06",
      time: "1 ч 20 мин",
    }
  ]
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;