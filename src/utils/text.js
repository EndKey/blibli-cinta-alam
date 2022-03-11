const errorMap = {

}

const trimWithDots = (name, length) => {
  let tmp = name ? name.trim() : ''
  tmp = tmp.substring(0, length) + (tmp.length > length ? '...' : '')
  return tmp
}

const isEmpty = (value) => {
  return value === '' || value === null || typeof value === 'undefined'
}

export { trimWithDots , isEmpty}
