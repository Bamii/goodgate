(function() {
  let currTab = document.querySelector('[data-tab-target].selected').dataset.tabTarget;
  const tabButtons = document.querySelectorAll('[data-tab]');

  Array.from(tabButtons).forEach(tab => {
    const idx = tab.dataset.tab;
    
    tab.onclick = function() {
      document.querySelector(`[data-tab-target="${currTab}"]`).classList.remove('selected');
      document.querySelector(`[data-tab-target="${idx}"]`).classList.add('selected');
      
      document.querySelector(`[data-tab="${currTab}"]`).classList.remove('selected');
      document.querySelector(`[data-tab="${idx}"]`).classList.add('selected');
      currTab = idx;
    }
  })
})();