(() => {
  const primaryHeader = document.querySelector('.primary-header')
  const nav = document.querySelector('.nav')

  const animateCSS = (node, animationName, speed, callback) => {
    node.classList.add('animated', animationName, speed)

    const handleAnimationEnd = () => {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
  }

  primaryHeader.addEventListener('click', (e) => {

    if (e.target.classList.contains('btn-menu')) {
      e.stopPropagation()

      if (e.target.classList.contains('btn-menu--open')) {
        animateCSS(nav, 'fadeInRight', 'faster')
      }

      nav.classList.toggle('hide-on-mobile')
    }
  })
})()

