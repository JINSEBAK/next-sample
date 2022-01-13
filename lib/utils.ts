// TODO! state 처리방식으로 변경
export const userAgent = () => {
  let agent = navigator.userAgent.toLowerCase();
  let name = navigator.appName;
  let browser;

  if (
    name === "Microsoft Internet Explorer" ||
    agent.indexOf("trident") > -1 ||
    agent.indexOf("edge/") > -1
  ) {
    browser = "ie";
    var browser2 = "ie";
    if (name === "Microsoft Internet Explorer") {
      // IE old version (IE 10 or Lower)
      agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
      browser += parseInt(agent[1]);
    } else {
      // IE 11+
      if (agent.indexOf("trident") > -1) {
        // IE 11
        browser += 11;
      } else if (agent.indexOf("edge/") > -1) {
        // Edge
        browser = "edge";
      }
    }
  } else if (agent.indexOf("safari") > -1) {
    // Chrome or Safari
    if (agent.indexOf("opr") > -1) {
      // Opera
      browser = "opera";
    } else if (agent.indexOf("chrome") > -1) {
      // Chrome
      if (agent.indexOf("samsung") > -1) {
        // SamsungBrowser
        browser = "chrome samsung";
      } else {
        browser = "chrome";
      }
    } else {
      // Safari
      browser = "safari";
    }
  } else if (agent.indexOf("firefox") > -1) {
    // Firefox
    browser = "firefox";
  }
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      //document.getElementsByTagName("article")[0].className = "ios";
      document.getElementsByTagName("article")[0].classList.add("ios");
    }
    if (/Android/i.test(window.navigator.userAgent)) {
      //document.getElementsByTagName("article")[0].className = "and";
      document.getElementsByTagName("article")[0].classList.add("and");
    }
    document.getElementsByTagName("body")[0].className = "dvc " + browser;
  } else {
    document.getElementsByTagName("body")[0].className = "pc " + browser;
  }
  //IOS Active bug
  document.addEventListener("touchstart", function () {}, true);
};

// TODO! state 처리방식으로 변경할것
export const scrollEvent = () => {
  let lastScrollTop = 0;
  let delta = 5;
  let fixBox = document.querySelector("#footer");
  let fixBoxHeight = fixBox.offsetHeight;
  let didScroll;
  window.onscroll = function (e) {
    didScroll = true;
  };
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
  function hasScrolled() {
    var nowScrollTop = window.scrollY;
    if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
      return;
    }
    if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
      fixBox.classList.remove("show");
    } else {
      if (nowScrollTop + window.innerHeight < document.body.offsetHeight) {
        fixBox.classList.add("show");
      }
    }
    lastScrollTop = nowScrollTop;
  }
};
