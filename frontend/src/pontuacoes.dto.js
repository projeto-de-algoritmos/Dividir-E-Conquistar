const fasesDePontuacoes = [
    {
      'Grifinória vs. Sonserina': [3, 0],
      'Grifinória vs. LufaLufa': [1, 1],
      'Grifinória vs. Corvinal': [0, 3],
      'Sonserina vs. LufaLufa': [1, 1],
      'Sonserina vs. Corvinal': [3, 0],
      'LufaLufa vs. Corvinal': [0, 3]
    },
    {
      'Grifinória vs. Sonserina': [0, 3],
      'Grifinória vs. LufaLufa': [0, 3],
      'Grifinória vs. Corvinal': [1, 1],
      'Sonserina vs. LufaLufa': [1, 1],
      'Sonserina vs. Corvinal': [3, 0],
      'LufaLufa vs. Corvinal': [0, 3]
    },
    {
      'Grifinória vs. Sonserina': [3, 0],
      'Grifinória vs. LufaLufa': [1, 1],
      'Grifinória vs. Corvinal': [3, 0],
      'Sonserina vs. LufaLufa': [0, 3],
      'Sonserina vs. Corvinal': [1, 1],
      'LufaLufa vs. Corvinal': [0, 3]
    },
    {
      'Grifinória vs. Sonserina': [3, 0],
      'Grifinória vs. LufaLufa': [1, 1],
      'Grifinória vs. Corvinal': [3, 0],
      'Sonserina vs. LufaLufa': [0, 3],
      'Sonserina vs. Corvinal': [3, 0],
      'LufaLufa vs. Corvinal': [3, 0]
    }
  ];

  const resultadoContagem = [
    // First Set of Matches
    {
      'Grifinória': [2,  1, 1 ],
      'Sonserina': [1,1, 2 ],
      'LufaLufa': [0,2, 2 ],
      'Corvinal': [2,0, 2 ]
    },
    // Second Set of Matches
    {
      'Grifinória': [0,1, 2],
      'Sonserina': [2,1, 0],
      'LufaLufa': [3,0, 1],
      'Corvinal': [1,1, 2]
    },
    // Third Set of Matches
    {
      'Grifinória': [2,1, 1],
      'Sonserina': [1,1, 2],
      'LufaLufa': [2,1, 1],
      'Corvinal': [0,1, 3]
    },
    // Fourth Set of Matches
    {
      'Grifinória': [3,1, 0],
      'Sonserina': [2,0, 2],
      'LufaLufa': [1,1, 2],
      'Corvinal': [0,0, 4]
    }
  ];

  module.exports = { fasesDePontuacoes, resultadoContagem };
