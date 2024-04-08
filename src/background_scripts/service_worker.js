chrome.commands.onCommand.addListener((shortcut) => {
  console.log(shortcut);
  if (shortcut == "reload_extension") {
    console.log("reload extension");
    chrome.runtime.reload();
  }
});