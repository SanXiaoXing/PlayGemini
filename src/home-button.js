;(function () {
  if (window.__homeButtonInjected) return
  window.__homeButtonInjected = true
  function createButton() {
    var button = document.createElement('button')
    button.type = 'button'
    button.textContent = '返回主页'
    button.style.position = 'fixed'
    button.style.left = '20px'
    button.style.top = '20px'
    button.style.zIndex = '9999'
    button.style.padding = '9px 18px'
    button.style.borderRadius = '999px'
    button.style.border = '1px solid rgba(148, 163, 184, 0.4)'
    button.style.background = 'rgba(15, 23, 42, 0.78)'
    button.style.color = '#dbe3ff'
    button.style.fontSize = '12px'
    button.style.letterSpacing = '0.04em'
    button.style.cursor = 'pointer'
    button.style.backdropFilter = 'blur(18px)'
    button.style.webkitBackdropFilter = 'blur(18px)'
    button.style.display = 'inline-flex'
    button.style.alignItems = 'center'
    button.style.gap = '6px'
    button.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.55)'
    button.style.transform = 'translate3d(0,0,0)'
    button.style.transition = 'box-shadow 220ms cubic-bezier(0.18,0.89,0.32,1.28), background 200ms ease-out, border-color 200ms ease-out'
    var dot = document.createElement('span')
    dot.style.width = '7px'
    dot.style.height = '7px'
    dot.style.borderRadius = '999px'
    dot.style.background = '#4ade80'
    dot.style.boxShadow = '0 0 18px rgba(74, 222, 128, 1)'
    var label = document.createElement('span')
    label.textContent = '返回主页'
    button.innerHTML = ''
    button.appendChild(dot)
    button.appendChild(label)
    var rect = null
    var frame = null
    function setTransform(rx, ry, scale) {
      button.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0) scale(' + scale + ')'
    }
    button.addEventListener('pointerenter', function () {
      rect = button.getBoundingClientRect()
      button.style.borderColor = 'rgba(129, 140, 248, 0.9)'
      button.style.background = 'rgba(15, 23, 42, 0.95)'
      button.style.boxShadow = '0 18px 45px rgba(15, 23, 42, 0.78)'
    })
    button.addEventListener('pointermove', function (e) {
      if (!rect) rect = button.getBoundingClientRect()
      var cx = rect.left + rect.width / 2
      var cy = rect.top + rect.height / 2
      var dx = e.clientX - cx
      var dy = e.clientY - cy
      var rx = dx * 0.12
      var ry = dy * 0.18
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(function () {
        setTransform(rx, ry, 1.05)
      })
    })
    function reset() {
      rect = null
      if (frame) cancelAnimationFrame(frame)
      frame = null
      setTransform(0, 0, 1)
      button.style.borderColor = 'rgba(148, 163, 184, 0.4)'
      button.style.background = 'rgba(15, 23, 42, 0.78)'
      button.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.55)'
    }
    button.addEventListener('pointerleave', reset)
    button.addEventListener('pointercancel', reset)
    button.addEventListener('mouseenter', function () {
      dot.style.boxShadow = '0 0 28px rgba(74, 222, 128, 1)'
    })
    button.addEventListener('mouseleave', function () {
      dot.style.boxShadow = '0 0 18px rgba(74, 222, 128, 1)'
    })
    button.addEventListener('click', function () {
      var base = window.location.origin
      var path = window.location.pathname
      if (path.indexOf('/src/') !== -1) {
        window.location.href = base + '/index.html'
      } else {
        window.location.href = base + '/'
      }
    })
    document.body.appendChild(button)
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createButton)
  } else {
    createButton()
  }
})()
