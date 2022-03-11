const getStaticPath = () => {
  return window._static_image_path
}

const goUrl = (url) => {
  if (process.env.NODE_ENV !== 'testing') {
    window.location.href = url
  } else {
    window.history.pushState({}, '', url)
  }
}

const isApp = () => {
  const flags = ['BlibliAndroid', 'BlibliMobile', 'blibli']
  const userAgent = navigator.userAgent
  if (flags.some(flag => userAgent.indexOf(flag) !== -1)) return true
  return false
}

const redirectTo = (vm, path) => {
  if (!path) return
  let url = ''
  try {
    const urlObj = new URL(path)
    url = urlObj.pathname + urlObj.search
  } catch (e) {
    url = path
  }
  const isBlibliApp = isApp()
  if (isBlibliApp) return goUrl(url)
  vm.$router.push(url)
}

export {
  getStaticPath,
  goUrl,
  isApp,
  redirectTo
}
