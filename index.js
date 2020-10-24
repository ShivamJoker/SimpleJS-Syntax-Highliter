const codeBlocks = document.querySelectorAll("code");

const formatCode = (el) => {
  console.log(el);
  const sqlReg = /\b(CREATE|ALL|DATABASE|TABLE|GRANT|PRIVILEGES|IDENTIFIED|FLUSH|SELECT|UPDATE|DELETE|INSERT|FROM|WHERE|ORDER|BY|GROUP|LIMIT|INNER|OUTER|AS|ON|COUNT|CASE|TO|IF|WHEN|BETWEEN|AND|OR)(?=[^\w])/gi;
  const txt = el.innerText;
  const sqlKeyword = '<span class="keyword">$1</span>';
  const formattedHTML = txt.replace(sqlReg, sqlKeyword);
  el.innerHTML = formattedHTML;
};

codeBlocks.forEach((el) => {
  formatCode(el);
//   el.addEventListener("keyup", formatCode(el));
});
