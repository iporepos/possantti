// Keep the page put when the dark/light toggle is clicked.
//
// The toggle is `<a id="mode" href="#">` (layouts/partials/header.html), and
// the theme's handler in themes/hugo-blog-awesome/assets/js/theme.js is
// `lamp.addEventListener("click", () => toggleTheme())` -- it never receives
// the event, so it cannot cancel anything. The browser therefore follows the
// empty fragment on every toggle: it scrolls to the top of the document and
// appends "#" to the URL.
//
// Cancelling the default here is enough, and does not interfere with the
// theme: preventDefault suppresses the default action whichever listener calls
// it, and listeners on the same element do not block one another, so
// toggleTheme() still runs and the theme still switches.
//
// Done in JS rather than by dropping the href in our header.html override,
// because an <a> without href stops being focusable and stops firing a click
// on Enter -- and the theme listens for click only, so keyboard users would
// silently lose the toggle.
document.addEventListener("DOMContentLoaded", () => {
  const mode = document.getElementById("mode");
  if (!mode) return;

  mode.addEventListener("click", (event) => event.preventDefault());
});
