function userAgent() {
  let agent = navigator.userAgent.toLowerCase(),
    name = navigator.appName,
    browser;

  console.log(agent);
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
      document.getElementsByTagName("article")[0].className = "ios";
    }
    if (/Android/i.test(window.navigator.userAgent)) {
      document.getElementsByTagName("article")[0].className = "and";
    }
    document.getElementsByTagName("body")[0].className = "dvc " + browser;
  } else {
    document.getElementsByTagName("body")[0].className = "pc " + browser;
  }
  //IOS Active bug
  document.addEventListener("touchstart", function () {}, true);
}
