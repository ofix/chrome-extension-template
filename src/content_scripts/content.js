const init = () => {
  const injectContentPage = (id, page_url) => {
    const inject_iframe = document.createElement("iframe");
    inject_iframe.id = id;
    inject_iframe.style.cssText =
      "width: 100%; height: 100%; position: fixed; inset: 0px; margin: 0px auto; z-index: 10000002; border: none;";
    const page_src = chrome.runtime.getURL(page_url);
    inject_iframe.src = page_src;
    document.body.appendChild(inject_iframe);
  };

  // 注入iframe页面
  injectContentPage("content-start-iframe", "content_pages/index.html");
};

init();
