import { createAction } from 'redux-actions';

// These are processed by the server - Nothing is processed from the client...
// In order the send the action to the server, we need to wrap the action with
// state/request.

export const CREATE = 'queue/create';
export const DELETE = 'queue/delete';
export const UPDATE = 'queue/update';

export const JOIN = 'queue/join';
export const LEAVE = 'queue/leave';

export const JOIN_MANAGER = 'queue/joinManager';
export const LEAVE_MANAGER = 'queue/leaveManager';

export const CREATE_LANE = 'queue/createLane';
export const RENAME_LANE = 'queue/renameLane';
export const DELETE_LANE = 'queue/deleteLane';

export const NEXT = 'queue/next';
export const CONFIRM = 'queue/confirm';

export const CONFIRM_BELL = 'queue/confirmBell';

// name, otp, useBells, lanes
export const create = createAction(CREATE, data => data);
export const deleteQueue = createAction(DELETE, id => ({ id }));
// name, otp, useBells
export const update = createAction(UPDATE,
  (id, data) => Object.assign({}, data, { id }));

export const join = createAction(JOIN, id => ({ id }));
export const leave = createAction(LEAVE, id => ({ id }));

export const joinManager = createAction(JOIN_MANAGER,
  (id, secret) => ({ id, secret }));
export const leaveManager = createAction(LEAVE_MANAGER, id => ({ id }));

export const createLane = createAction(CREATE_LANE,
  (id, name) => ({ id, name }));
export const renameLane = createAction(RENAME_LANE,
  (id, laneId, name) => ({ id, laneId, name }));
export const deleteLane = createAction(DELETE_LANE,
  (id, laneId) => ({ id, laneId }));

export const next = createAction(NEXT,
  (id, laneId) => ({ id, laneId }));
export const confirm = createAction(CONFIRM,
  (id, laneId, success, description) => ({ id, laneId, success, description }));
export const confirmBell = createAction(CONFIRM_BELL,
  (id, userId, success) => ({ id, userId, success }));
