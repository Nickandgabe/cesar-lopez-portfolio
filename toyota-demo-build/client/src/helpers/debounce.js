/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undefined */

import throttle from './throttle';

export default function (delay, atBegin, callback) {
  return callback === undefined
    ? throttle(delay, atBegin, false)
    : throttle(delay, callback, atBegin !== false);
}
