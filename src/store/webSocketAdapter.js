import ReconnectingWebSocket from 'reconnectingwebsocket';
import * as StateActions from '../action/state';
import * as ResponseActions from '../action/response';

function parseJSON(string) {
  try {
    return JSON.parse(string);
  } catch (e) {
    return null;
  }
}

export default function webSocketConnector(endpoint) {
  let client = null;
  let sendBuffer = [];
  let sentResponse = [];
  return store => {
    function handleCreate() {
      client.onopen = () => {
        console.log('Connected to the web socket server.');
        while (sendBuffer.length > 0) {
          sendData(sendBuffer.shift(), true);
        }
      };
      client.onmessage = event => {
        let data = parseJSON(event.data);
        if (data == null) return;
        console.log('Notification received');
        console.log(data);
        switch (data.type) {
          case StateActions.UPDATE:
            return store.dispatch(data);
          case ResponseActions.HANDSHAKE: {
            return store.dispatch({
              type: StateActions.UPDATE,
              payload: data.payload,
            });
          }
          case ResponseActions.OK: {
            // get responseOf and fulfill the promise
            let { responseOf } = data.meta;
            sentResponse[responseOf].resolve(data.payload);
            sentResponse[responseOf] = undefined;
            break;
          }
          case ResponseActions.ERROR: {
            let { responseOf } = data.meta;
            sentResponse[responseOf].reject(data.payload);
            sentResponse[responseOf] = undefined;
            break;
          }
        }
      };
      client.onerror = event => {
        console.log('error', event);
      };
      client.onclose = () => {
        console.log('Disconnected from the web socket server.');
      };
    }
    function sendData(_data, drop = false) {
      let resId = sentResponse.length;
      let data = Object.assign({}, _data, {
        meta: Object.assign({}, _data.meta, {
          requestOf: resId,
        }),
      });
      if (client != null && client.readyState === 1) {
        client.send(JSON.stringify(data));
      } else if (!drop) {
        sendBuffer.push(data);
      }
      let resolve, reject;
      let promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      sentResponse.push({ resolve, reject });
      return promise;
    }
    return next => action => {
      let prevState = store.getState();
      if (client == null) {
        client = new ReconnectingWebSocket(endpoint);
        handleCreate();
      }
      if (action.type === StateActions.REQUEST) {
        return sendData(action.payload, true);
      } else {
        return next(action);
      }
    };
  };
}
