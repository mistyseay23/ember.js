import symbol from './symbol';

export const TRACKABLE_OBJECT = symbol('TRACKABLE_OBJECT');

export function isTrackableObject(obj: any) {
  let objType = typeof obj;

  return (
    ((obj !== null && objType === 'object') || objType === 'function') &&
    (Array.isArray(obj) || obj[TRACKABLE_OBJECT] === true)
  );
}
