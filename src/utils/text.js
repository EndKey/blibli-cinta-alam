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

const numbersWithDot = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export { trimWithDots , isEmpty, numbersWithDot}
