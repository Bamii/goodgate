(function() {
  const tabButtons = document.querySelectorAll('[data-tab]');

  Array.from(tabButtons).forEach(tab => {
    const idx = tab.dataset.tab;
    const tabGroup = tab.dataset.tabGroup;
    
    tab.onclick = function() {
      document.querySelector(`[data-tab-group=${tabGroup}][data-tab-target].selected`).classList.remove('selected');
      document.querySelector(`[data-tab-group=${tabGroup}][data-tab-target="${idx}"]`).classList.add('selected');
      
      document.querySelector(`[data-tab-group=${tabGroup}][data-tab].selected`).classList.remove('selected');
      document.querySelector(`[data-tab-group=${tabGroup}][data-tab="${idx}"]`).classList.add('selected');
      currTab = idx;
    }
  })
})();