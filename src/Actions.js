const ACTIONS = {
  JOIN: 'join',
  JOINED: 'joined',
  DISCONNECTED: 'disconnected',
  CODE_CHANGE: 'code-change',
  SYNC_CODE: 'sync-code',
  LEAVE: 'leave',
};

// Using commonjs export for backend(node) as well as frontend(react) to understand
module.exports = ACTIONS;
