(function() {
  Array.from(document.querySelectorAll('[data-page-target]')).forEach(el => {
    el.onclick = function() {
      document.querySelector('[data-page].selected').classList.remove('selected')
      document.querySelector(`[data-page=${this.dataset.pageTarget}]`).classList.add('selected')
    }
  })
})()