import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchMessagesSuccess, fetchMessagesError } from '../actions/messages';
import axios from 'axios';

import { types } from './../actions/messages';

const fetchMessages = () => {
  const bodyFormData = new FormData();
  bodyFormData.append('actionName', 'MessagesLoad');
  return axios({
    method: 'post',
    url: 'http://f0665380.xsph.ru/',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export function* fetchMessagesSaga() {
  try {
    const result = yield call(fetchMessages);
    yield console.log(result);
    yield put(fetchMessagesSuccess(result));
  } catch (error) {
    yield console.log(error);
    yield put(fetchMessagesError(error));
  }
}

export function* watchMessagesSaga() {
  yield takeEvery(types.FETCH_MESSAGES_REQUEST, fetchMessagesSaga);
}
