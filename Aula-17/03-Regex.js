const text = `t is a long established lookinghas a al dis, 1875 as opposed to using 'Content here, content here', 1817 making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search`;

const regexAaZ = /[A-z]/; //ele pega muitos simbolos, verificar a tabela unicode
const regexJustLetters = /[A-Za-z0-9]/; // ou [/\w/] -- pega o alfa numerico e o underscore.
