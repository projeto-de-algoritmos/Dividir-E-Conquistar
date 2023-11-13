class MedianaDasMedianas {
    constructor(fases) {
      this.fases = fases;
      this.resultados = {
        Grifinória: [],
        Sonserina: [],
        LufaLufa: [],
        Corvinal: []
      };
    }
  
    calcularMediana(arr) {
      const sorted = arr.sort((a, b) => a - b);
      const middle = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
      } else {
        return sorted[middle];
      }
    }
  
    obterMedianaDasMedianasOrdenadas() {
        const medianaDasMedianas = [];
        for (const casa in this.resultados) {
          const mediana = this.calcularMediana(this.resultados[casa]);
          medianaDasMedianas.push(mediana);
        }
        medianaDasMedianas.sort((a, b) => b - a); // Ordena de forma decrescente
        return medianaDasMedianas;
      }
  }

  // Exemplo de uso da classe MedianaDasMedianas
  const fasesDePontuacoes = [
    {
      'Grifinória vs. Sonserina': [3, 0],
      'Grifinória vs. LufaLufa': [1, 3],
      'Grifinória vs. Corvinal': [0, 3],
      'Sonserina vs. LufaLufa': [1, 1],
      'Sonserina vs. Corvinal': [3, 0],
      'LufaLufa vs. Corvinal': [0, 3]
    },
    {
      'Grifinória vs. Sonserina': [0, 3],
      'Grifinória vs. LufaLufa': [0, 3],
      'Grifinória vs. Corvinal': [0, 3],
      'Sonserina vs. LufaLufa': [1, 1],
      'Sonserina vs. Corvinal': [3, 0],
      'LufaLufa vs. Corvinal': [0, 3]
    },
    {
      'Grifinória vs. Sonserina': [3, 0],
      'Grifinória vs. LufaLufa': [1, 1],
      'Grifinória vs. Corvinal': [3, 0],
      'Sonserina vs. LufaLufa': [0, 3],
      'Sonserina vs. Corvinal': [3, 0],
      'LufaLufa vs. Corvinal': [0, 3]
    },
    {
      'Grifinória vs. Sonserina': [3, 0],
      'Grifinória vs. LufaLufa': [3, 0],
      'Grifinória vs. Corvinal': [3, 0],
      'Sonserina vs. LufaLufa': [0, 3],
      'Sonserina vs. Corvinal': [3, 0],
      'LufaLufa vs. Corvinal': [3, 0]
    }
  ];
  
  const torneio = new MedianaDasMedianas(fasesDePontuacoes);
  torneio.calcularParaCasa('Grifinória');
  torneio.calcularParaCasa('Sonserina');
  torneio.calcularParaCasa('LufaLufa');
  torneio.calcularParaCasa('Corvinal');
  
  const medianaDasMedianasOrdenadas = torneio.obterMedianaDasMedianasOrdenadas();
  console.log(medianaDasMedianasOrdenadas);