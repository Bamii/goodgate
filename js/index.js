(function(){
  const topBar = document.getElementById("top-strip-container");
  const bannerSection = document.getElementById("banner-section");
  const bannerControls = document.getElementsByClassName("slide-dot");

  const updateSectionPrev = document.getElementById('updates-slider-prev')
  const updateSectionNext = document.getElementById('updates-slider-next');
  const ITEM_RIGHT_MARGIN = 20;
  const BANNER_ITEMS = 3;

  let currentBannerIndex = 0;
  let previousBannerIndex = 0;
  

  /* sticky-header */
  document.onscroll = function() {
    const { y } = bannerSection.getBoundingClientRect();
    if(y < 0) {
      topBar.classList.remove("transparent");
    } else {
      topBar.classList.add("transparent");
    }
  }

  // updateSectionNext.onclick = function() {
  //   movePortfolio('right');
  // }

  // updateSectionPrev.onclick = function() {
  //   movePortfolio('left');
  // }

  /* banner related things */
  Array.from(bannerControls).forEach(indicator => {
    indicator.onclick = changeBannerIndicator;
  });

  setInterval(() => {
    previousBannerIndex = currentBannerIndex;
    currentBannerIndex = currentBannerIndex === BANNER_ITEMS-1 ? 0 : ++currentBannerIndex;
    const currentTextContainer = document.querySelector(`[data-slide='${currentBannerIndex}'] .banner-slide-description-container`);

    // addAnimation(currentTextContainer);
    updateBanner(currentBannerIndex);
  }, 8000);

  /* functions */
  function movePortfolio(direction) {
    const updates = document.getElementById('updates-slider');
    const childrenLength = updates.children.length;
    const width = Array.from(updates.children)[0].width;
    let index = 0;

    if (
      (index === childrenLength - 1 && direction === 'right') ||
      (index === 0 && direction === 'left')
    ) {
      return;
    }
    
    direction === 'right' ? ++index : --index;
    updates.scrollLeft = index * (width + ITEM_RIGHT_MARGIN);
  }

  function updateBanner(index) {
    const bannerSlides = document.getElementById("banner-slides");
    
    bannerSlides.scrollLeft = index * window.innerWidth;
    updateControls();
  }

  function updateControls() {
    document.querySelector(`[data-slide-control-index="${previousBannerIndex}"]`).classList.remove('selected');
    document.querySelector(`[data-slide-control-index="${currentBannerIndex}"]`).classList.add('selected');
  }

  function changeBannerIndicator(event) {
    const element = event.target;
    const position = element.dataset.slideControlIndex;
    console.log('daf')
    previousBannerIndex = currentBannerIndex;
    currentBannerIndex = position;
    updateBanner(currentBannerIndex);
  }
})();