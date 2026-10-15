document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    // Chroma's `linenos=true` (table) layout puts the line numbers in their own
    // <pre><code> in a sibling table cell, so this selector matches it too and
    // used to get a second button that copied nothing but the numbers. The
    // numbers column is the only block containing .lnt spans; skip it.
    // (`linenos=inline` is different: the numbers live inside the code block
    // itself as .ln spans, handled when reading the text below.)
    if (codeBlock.querySelector(".lnt")) return;

    const pre = codeBlock.parentNode;

    const button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";

    button.innerHTML = `
      <svg class="icon-copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
        <path fill="currentColor" d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/>
      </svg>
    `;

    button.addEventListener("click", async () => {
      // With `linenos=inline` the numbers are .ln spans inside this very block,
      // so copying it verbatim would interleave them with the code. Strip them
      // from a detached clone; textContent is used rather than innerText since
      // innerText is unreliable on a node that is not in the document, and
      // Chroma emits real newlines so line breaks survive either way.
      let code = codeBlock.innerText;
      if (codeBlock.querySelector(".ln")) {
        const clone = codeBlock.cloneNode(true);
        clone.querySelectorAll(".ln").forEach((n) => n.remove());
        code = clone.textContent;
      }

      try {
        await navigator.clipboard.writeText(code);

        button.innerHTML = `
          <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
          </svg>
        `;

        setTimeout(() => {
          button.innerHTML = `
            <svg class="icon-copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/>
            </svg>
          `;
        }, 2000);

      } catch (err) {
        button.innerHTML = "!";
      }
    });

    // Anchor the button to a box that does NOT scroll, so it stays pinned at
    // the visible top-right instead of riding along with the code.
    //
    // The `pre` is the wrong host whenever the block can scroll horizontally.
    // In a `linenos` block the code cell's `pre` is as wide as its content and
    // sits inside the scrolling `.highlight > div.chroma`, so `right: 0.5rem`
    // anchors to the far right of the *content* -- off-screen until you scroll.
    // A plain block has the same problem one level up, since there the `pre` is
    // itself the scroll container.
    //
    // `.highlight` is Hugo's outer wrapper around any highlighted block and
    // never scrolls, so it pins correctly in both modes. A fence with no
    // language gets no wrapper at all, and cannot scroll either, so the `pre`
    // remains the right host there.
    const host = codeBlock.closest(".highlight") || pre;

    host.style.position = "relative";
    button.style.position = "absolute";
    button.style.top = "0.5rem";
    button.style.right = "0.5rem";

    host.appendChild(button);
  });
});