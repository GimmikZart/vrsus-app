export function anyObjectKeyEmpty(obj) {
  return !Object.values(obj).some(x => x !== null && x !== '')
}

export function isEmptyObject(obj) {
  return (
    [Object, Array].includes((obj || {}).constructor)
    && !Object.entries(obj || {}).length
  )
}
