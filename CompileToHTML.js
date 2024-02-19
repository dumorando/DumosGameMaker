// dumo178's game maker COMPILE TO HTML script.
// licensed under BSD-3 clause license.

function compileToHtml(jsCode, title) {
  let encoded = btoa(jsCode);
  let kaboomjs = dgm.kaboom;
  let HtmlTemplate = `<!-- made with Dumos Game Maker --> <!doctype html><html><head><title>${title.trim()}</title><style></style></head><body><script src="${kaboomjs}"><\/script><script>eval(atob("${btoa(jsCode)}"))<\/script></body></html>`;
  return HtmlTemplate;
}
