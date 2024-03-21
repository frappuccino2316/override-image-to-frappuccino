(() => {
  const imgs = document.getElementsByTagName('img');
  const url = chrome.runtime.getURL('img/frappuccino.jpg');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].src = url;
  }
})();
