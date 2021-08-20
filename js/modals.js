(function() {
  const dataModalButton = document.querySelectorAll('[data-modal]')
  
  Array.from(dataModalButton).forEach(btn => {
    const modalTarget = btn.dataset.modal;

    btn.onclick = function () {
      currModal = modalTarget
      document.querySelector(`[data-modal-target=${modalTarget}]`).classList.toggle('visible')
    }
  })
})()