const {
  getInitials,
  createSlug,
  avarage,
  isPalidrome,
  findPostById,
} = require("./snacks.js");

describe("Manipolazione di stringhe", () => {
  //----------------------------------------SNACK 1--------------------------------------------//
  test("La funzione getInitials restituisce le iniziali di un nome completo ", () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.");
  });

  //----------------------------------------SNACK 5--------------------------------------------//
  test(`La funzione isPalidrome verifica se una stringa e palindromo`, () => {
    expect(isPalidrome("anna ")).toBeTruthy();
    expect(isPalidrome("boolean")).toBeFalsy();
  });
});



describe("Operazioni su array", () => {
  //----------------------------------------SNACK 3--------------------------------------------//
  test(`La funzione "avarage" calcola la media aritmetica di un array di numeri`, () => {
    expect(avarage([5, 15])).toBe(10);
    expect(avarage([10, 20, 30, 40, 50])).toBe(30);
    expect(() => avarage([5, "ciao"])).toThrow();
  });

  //----------------------------------------SNACK 7--------------------------------------------//
  const posts = [
    {
      id: 1,
      title: "Introduzione alla Programmazione",
      slug: "introduzione-alla-programmazione",
    },
    { id: 2, title: "Strutture Dati", slug: "strutture-dati" },
  ];

  test(`La funzione findPostById restituisce il post corretto dato l'array di post e l'id`, () => {
    expect(findPostById(posts, 2)).toEqual({
      id: 2,
      title: "Strutture Dati",
      slug: "strutture-dati",
    });
    expect(findPostById(posts, 3)).toBe(null);
    expect(() => findPostById(posts, "ciao")).toThrow(`"ciao" non è un id`);
    expect(() => findPostById([34, 67], 2)).toThrow(
      `L'array posts non è nel formato corretto`
    );
  });
});



describe("Generazione di slug", () => {
  //----------------------------------------SNACK 2--------------------------------------------//
  test("La funzione createSlug restituisce una stringa in lowerCase", () => {
    expect(createSlug("Titolo CON Maiuscole")).toBe("titolo-con-maiuscole");
  });

  //----------------------------------------SNACK 4--------------------------------------------//
  test(`La funzione createSlug sostituisce gli spazi con " - "`, () => {
    expect(createSlug("Titolo MOLTO bello")).toBe("titolo-molto-bello");
  });

  //----------------------------------------SNACK 6--------------------------------------------//
  test(`La funzione createSlug lancia un errore se il titolo e vuoto o non valido`, () => {
    expect(() => createSlug("")).toThrow(`titolo non valido`);
    expect(() => createSlug(null)).toThrow(`titolo non valido`);
  });
});
