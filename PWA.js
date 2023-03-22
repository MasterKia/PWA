// ==UserScript==
// @name        PWA
// @match       https://mobileweb.bankmellat.ir/*
// @grant       none
// @run-at document-start
// ==/UserScript==

window.navigator.standalone = true;
Object.defineProperty(navigator, "userAgent", {
  value:
    "iPad; CPU OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari",
});

Object.defineProperty(navigator, "platform", {
  value:
    "iPhone",
});
