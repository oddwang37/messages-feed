import { all, fork } from 'redux-saga/effects';
import { watchMessagesSaga } from './messages';

function* rootSaga() {
  yield all([fork(watchMessagesSaga)]);
}

export default rootSaga;
