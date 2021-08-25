(function(){
  const dashboardNavTag =  document.querySelectorAll('[data-nav-tag]')
  const mobileDashboardNavBtn = document.querySelectorAll('[data-mobile-dashboard-nav]')
  let prev;

  Array.from(dashboardNavTag).forEach(tag => {
    tag.onclick = function({ target }) {
      const tagTarget = target.dataset.navTag;
      if (prev == tagTarget) {
        document.querySelector(`[data-nav-tag-target=${tagTarget}`).classList.toggle('expanded')
        return
      }
      if (prev) document.querySelector(`[data-nav-tag-target=${prev}`).classList.remove('expanded')
      document.querySelector(`[data-nav-tag-target=${tagTarget}`).classList.add('expanded')
      prev = tagTarget
    }
  })


  Array.from(document.querySelectorAll('[data-popup-open]')).forEach(el => {
    el.onclick = function() {
      const tag = this.dataset.popupOpen;
      let current = document.querySelector('[data-popup].show');
      if(current) {
        current.classList.remove('show')
        if(tag === current.dataset.popup) return
      };
      document.querySelector(`[data-popup=${tag}]`).classList.add('show')
    }
  })
  
  document.getElementById('alert-close').onclick = function () {
    document.getElementById('alert').classList.remove('active')
  }

  Array.from(mobileDashboardNavBtn).forEach(btn => {
    btn.onclick = function() {
      document.getElementById('dashboard-navigation-container').classList.toggle('menu-open')
    }
  })

  Array.from(document.getElementsByClassName('action-checkbox')).forEach(el => {
    el.onclick = function() {
      this.selected = !this.classList.contains('checked')
      this.classList.toggle('checked')
    }
  })
})()