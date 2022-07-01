const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"https://www.allensolly.com/?gclid=Cj0KCQjwtvqVBhCVARIsAFUxcRtKdW-2f5Dk6ejQ6luIbdlWd8ura9bV5cUKrrU4h9WP8gUsBrwPsY4aAgvPEALw_wcB"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)

