(function() {
  const appTabOpen = document.querySelectorAll('[data-application-open]')
  const openApplicationTab = document.querySelectorAll('[data-application-step]')
  let prev = 'main'

  Array.from(appTabOpen).forEach(el => {
    el.onclick = function(el) {
      document.querySelector(`[data-application-step=${prev}]`).classList.remove('selected')
      prev = this.dataset.applicationOpen;
      document.querySelector(`[data-application-step=${prev}]`).classList.add('selected')
    }
  })
})();