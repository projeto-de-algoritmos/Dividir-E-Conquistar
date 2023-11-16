const { fasesDePontuacoes } = require('./pontuacoes.dto');


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
  
    calcularParaCasa(casa) {
      const medianas = [];
      this.fases.forEach((fase, index) => {
        const pontuacoes = [];
        for (const key in fase) {
          if (key.includes(casa)) {
            pontuacoes.push(fase[key][0], fase[key][1]);
          }
        }
        const mediana = this.calcularMediana(pontuacoes);
        medianas.push(mediana);
        console.log(`Mediana das pontuações da casa ${casa} na Fase ${index + 1}: ${mediana}`);
      });
      const medianaDasMedianas = this.calcularMediana(medianas);
      this.resultados[casa].push(medianaDasMedianas);
      console.log(`Mediana das Medianas da casa ${casa} ao longo das fases: ${medianaDasMedianas}`);
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
  
  
const torneio = new MedianaDasMedianas(fasesDePontuacoes);
torneio.calcularParaCasa('Grifinória');
torneio.calcularParaCasa('Sonserina');
torneio.calcularParaCasa('LufaLufa');
torneio.calcularParaCasa('Corvinal');

const medianaDasMedianasOrdenadas = torneio.obterMedianaDasMedianasOrdenadas();
console.log(medianaDasMedianasOrdenadas);


