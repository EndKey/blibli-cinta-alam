const formatCurrency = (value) => {
  if (value !== '' && value !== null && typeof value !== 'undefined') {
    return 'Rp' + String(value).replace(/(.)(?=(\d{3})+$)/g, '$1.')
  }
  return ''
}

const formatDotPoint = (value) => {
  if (value !== '' && value !== null && typeof value !== 'undefined') {
    return String(value).replace(/(.)(?=(\d{3})+$)/g, '$1.')
  }
  return 0
}

export {
  formatCurrency,
  formatDotPoint
}
