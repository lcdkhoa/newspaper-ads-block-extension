function removeAds() {
  //class names in html will has a dot before the name
  // id names in html will has a # before the name
  const arrAds = [
    ".ad-panel",
    ".GssDD",
    ".super-masthead",
    ".section__topbanner",
    ".section__qadd",
    ".box-home-2",
    ".lbeltk",
    ".modal-content",
    "#zone-lbosc0aj",
    "#pure-u-custom-ad-skyscraper u-c",
    "#pure-u-custom-ad-rectangle u-c",
    "#LeaderBoardTop",
    "#bgAdmLeft",
    "#bgAdmRight",
    "#oa-360-1702736888177_48e4owf4p",
  ];

  arrAds.forEach(function (ad) {
    var adPanels = document.querySelectorAll(ad);
    if (!adPanels) return;
    adPanels.forEach(function (panel) {
      panel.remove();
    });
  });
}

// Call the function to remove ads
removeAds();
