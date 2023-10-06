const dados = [
  {
    id: 1,
    pt: "Maçã",
    en: "Apple",
    es: "Manzana",
    categoria: "Fruta",
    dificuldade: "Fácil",
  },
  {
    id: 2,
    pt: "Cachorro",
    en: "Dog",
    es: "Perro",
    categoria: "Animal",
    dificuldade: "Fácil",
  },
  {
    id: 3,
    pt: "Casa",
    en: "House",
    es: "Casa",
    categoria: "Moradia",
    dificuldade: "Fácil",
  },
  {
    id: 4,
    pt: "Computador",
    en: "Computer",
    es: "Computadora",
    categoria: "Tecnologia",
    dificuldade: "Médio",
  },
  {
    id: 5,
    pt: "Futebol",
    en: "Football",
    es: "Fútbol",
    categoria: "Esporte",
    dificuldade: "Médio",
  },
  {
    id: 6,
    pt: "Livro",
    en: "Book",
    es: "Libro",
    categoria: "Literatura",
    dificuldade: "Fácil",
  },
  {
    id: 7,
    pt: "Gato",
    en: "Cat",
    es: "Gato",
    categoria: "Animal",
    dificuldade: "Fácil",
  },
  {
    id: 8,
    pt: "Carro",
    en: "Car",
    es: "Coche",
    categoria: "Veículo",
    dificuldade: "Médio",
  },
  {
    id: 9,
    pt: "Telefone",
    en: "Phone",
    es: "Teléfono",
    categoria: "Tecnologia",
    dificuldade: "Fácil",
  },
  {
    id: 10,
    pt: "Bola",
    en: "Ball",
    es: "Pelota",
    categoria: "Esporte",
    dificuldade: "Fácil",
  },
  {
    id: 11,
    pt: "Piano",
    en: "Piano",
    es: "Piano",
    categoria: "Instrumento Musical",
    dificuldade: "Médio",
  },
  {
    id: 12,
    pt: "Montanha",
    en: "Mountain",
    es: "Montaña",
    categoria: "Natureza",
    dificuldade: "Difícil",
  },
  {
    id: 13,
    pt: "Avião",
    en: "Airplane",
    es: "Avión",
    categoria: "Meio de Transporte",
    dificuldade: "Médio",
  },
  {
    id: 14,
    pt: "Camisa",
    en: "Shirt",
    es: "Camisa",
    categoria: "Vestuário",
    dificuldade: "Fácil",
  },
  {
    id: 15,
    pt: "Café",
    en: "Coffee",
    es: "Café",
    categoria: "Bebida",
    dificuldade: "Fácil",
  },
  {
    id: 16,
    pt: "Árvore",
    en: "Tree",
    es: "Árbol",
    categoria: "Natureza",
    dificuldade: "Fácil",
  },
  {
    id: 17,
    pt: "Céu",
    en: "Sky",
    es: "Cielo",
    categoria: "Natureza",
    dificuldade: "Fácil",
  },
  {
    id: 18,
    pt: "Relógio",
    en: "Clock",
    es: "Reloj",
    categoria: "Tecnologia",
    dificuldade: "Fácil",
  },
  {
    id: 19,
    pt: "Chocolate",
    en: "Chocolate",
    es: "Chocolate",
    categoria: "Doce",
    dificuldade: "Fácil",
  },
  {
    id: 20,
    pt: "Ouro",
    en: "Gold",
    es: "Oro",
    categoria: "Mineral",
    dificuldade: "Médio",
  },
  {
    id: 21,
    pt: "Olho",
    en: "Eye",
    es: "Ojo",
    categoria: "Parte do Corpo",
    dificuldade: "Fácil",
  },
  {
    id: 22,
    pt: "Bolsa",
    en: "Bag",
    es: "Bolso",
    categoria: "Acessório",
    dificuldade: "Fácil",
  },
  {
    id: 23,
    pt: "Estrela",
    en: "Star",
    es: "Estrella",
    categoria: "Astronomia",
    dificuldade: "Fácil",
  },
  {
    id: 24,
    pt: "Criança",
    en: "Child",
    es: "Niño",
    categoria: "Pessoa",
    dificuldade: "Fácil",
  },
  {
    id: 25,
    pt: "Violão",
    en: "Guitar",
    es: "Guitarra",
    categoria: "Instrumento Musical",
    dificuldade: "Médio",
  },
  {
    id: 26,
    pt: "Lápis",
    en: "Pencil",
    es: "Lápiz",
    categoria: "Material de Escritório",
    dificuldade: "Fácil",
  },
  {
    id: 27,
    pt: "Tênis",
    en: "Sneakers",
    es: "Zapatillas",
    categoria: "Calçado",
    dificuldade: "Fácil",
  },
  {
    id: 28,
    pt: "Planeta",
    en: "Planet",
    es: "Planeta",
    categoria: "Astronomia",
    dificuldade: "Médio",
  },
  {
    id: 29,
    pt: "Mesa",
    en: "Table",
    es: "Mesa",
    categoria: "Móvel",
    dificuldade: "Fácil",
  },
  {
    id: 30,
    pt: "Mar",
    en: "Sea",
    es: "Mar",
    categoria: "Natureza",
    dificuldade: "Fácil",
  },
  {
    id: 31,
    pt: "Orelha",
    en: "Ear",
    es: "Oreja",
    categoria: "Parte do Corpo",
    dificuldade: "Fácil",
  },
  {
    id: 32,
    pt: "Chave",
    en: "Key",
    es: "Llave",
    categoria: "Objeto",
    dificuldade: "Fácil",
  },
  {
    id: 33,
    pt: "Bolo",
    en: "Cake",
    es: "Pastel",
    categoria: "Doce",
    dificuldade: "Fácil",
  },
  {
    id: 34,
    pt: "Lua",
    en: "Moon",
    es: "Luna",
    categoria: "Astronomia",
    dificuldade: "Fácil",
  },
  {
    id: 35,
    pt: "Mão",
    en: "Hand",
    es: "Mano",
    categoria: "Parte do Corpo",
    dificuldade: "Fácil",
  },
  {
    id: 36,
    pt: "Pássaro",
    en: "Bird",
    es: "Pájaro",
    categoria: "Animal",
    dificuldade: "Fácil",
  },
  {
    id: 37,
    pt: "Abacaxi",
    en: "Pineapple",
    es: "Piña",
    categoria: "Fruta",
    dificuldade: "Fácil",
  },
  {
    id: 38,
    pt: "Fogo",
    en: "Fire",
    es: "Fuego",
    categoria: "Elemento",
    dificuldade: "Médio",
  },
  {
    id: 39,
    pt: "Oceano",
    en: "Ocean",
    es: "Océano",
    categoria: "Natureza",
    dificuldade: "Difícil",
  },
  {
    id: 40,
    pt: "Chapéu",
    en: "Hat",
    es: "Sombrero",
    categoria: "Vestuário",
    dificuldade: "Fácil",
  },
  {
    id: 41,
    pt: "Criança",
    en: "Child",
    es: "Niño",
    categoria: "Pessoa",
    dificuldade: "Fácil",
  },
  {
    id: 42,
    pt: "Moto",
    en: "Motorcycle",
    es: "Motocicleta",
    categoria: "Veículo",
    dificuldade: "Médio",
  },
  {
    id: 43,
    pt: "Flor",
    en: "Flower",
    es: "Flor",
    categoria: "Planta",
    dificuldade: "Fácil",
  },
  {
    id: 44,
    pt: "Ponte",
    en: "Bridge",
    es: "Puente",
    categoria: "Construção",
    dificuldade: "Médio",
  },
  {
    id: 45,
    pt: "Pão",
    en: "Bread",
    es: "Pan",
    categoria: "Alimento",
    dificuldade: "Fácil",
  },
  {
    id: 46,
    pt: "Dinheiro",
    en: "Money",
    es: "Dinero",
    categoria: "Finanças",
    dificuldade: "Fácil",
  },
  {
    id: 47,
    pt: "Bicicleta",
    en: "Bicycle",
    es: "Bicicleta",
    categoria: "Veículo",
    dificuldade: "Fácil",
  },
  {
    id: 48,
    pt: "Estrela",
    en: "Star",
    es: "Estrella",
    categoria: "Astronomia",
    dificuldade: "Fácil",
  },
  {
    id: 49,
    pt: "Lápis",
    en: "Pencil",
    es: "Lápiz",
    categoria: "Material de Escritório",
    dificuldade: "Fácil",
  },
  {
    id: 50,
    pt: "Sapato",
    en: "Shoe",
    es: "Zapato",
    categoria: "Calçado",
    dificuldade: "Fácil",
  }
];

  export default dados;