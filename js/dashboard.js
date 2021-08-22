(function(){
  const dashboardNavTag =  document.querySelectorAll('[data-nav-tag]')
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


  document.querySelector('[data-notifications-open]').onclick = function() {
    document.querySelector('[data-notifications]').classList.toggle('show')
  }
  
  document.getElementById('alert-close').onclick = function () {
    document.getElementById('alert').classList.remove('active')
  }
})()