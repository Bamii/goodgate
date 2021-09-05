(function() {
  const dataModalButton = document.querySelectorAll('[data-modal]')
  let currModal = null;
  
  Array.from(dataModalButton).forEach(btn => {
    
    btn.onclick = function ({ target }) {
      const modalTarget = target.dataset.modal;
      
      if(document.querySelector(`.modal.visible`))
        document.querySelector(`.modal.visible`).classList.remove('visible')

      if(currModal === modalTarget) {
        currModal = null
        return
      };
      currModal = modalTarget
      document.querySelector(`[data-modal-target=${modalTarget}]`).classList.toggle('visible')
    }
  })
})()