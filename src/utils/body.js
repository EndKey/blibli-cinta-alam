const disableScrollLock = () => {
  document.body.style.overflow = ''
}

const enableScrollLock = () => {
  document.body.style.overflow = 'hidden'
}

const disableScrollRestoration = () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
}

const enableScrollRestoration = () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'auto'
  }
}

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

export {
  disableScrollLock,
  enableScrollLock,
  disableScrollRestoration,
  enableScrollRestoration,
  scrollToTop
}
