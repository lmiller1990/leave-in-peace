/**
 * Popup Maker
 * Homepage: https://wppopupmaker.com/
 *
 * Example: https://doseme-rx.com
 */
const blockPopupMaker = () => {
  const arr = Array.from(document.getElementsByClassName("pum-overlay"))

  if (arr.length) {
    console.log("Blocked Popup Maker popup")
    arr.forEach(el => el.remove())
  }
}

blockPopupMaker()
