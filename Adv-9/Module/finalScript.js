const harry = "potter";
const voldemort = "He who must not be named";

//Oq nao quiser exportar nao ter o export
//Like react.
export function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);

  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}
