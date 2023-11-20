// Função para calcular a mediana das medianas
function medianaDasMedianas(arr) {
  const grupos = [];
  for (let i = 0; i < arr.length; i += 3) {
      grupos.push(arr.slice(i, i + 3));
  }

  const medianas = grupos.map(grupo => {
      return grupo.sort((a, b) => a - b)[Math.floor(grupo.length / 2)];
  });

  const medianaDasMedianas = selecionar(medianas, Math.floor(medianas.length / 2));

  return medianaDasMedianas;
}

// Função para selecionar o k-ésimo menor elemento em um array
function selecionar(arr, k) {
  if (arr.length === 1) {
      return arr[0];
  }

  const grupos = [];
  for (let i = 0; i < arr.length; i += 3) {
      grupos.push(arr.slice(i, i + 3));
  }

  const medianas = grupos.map(grupo => {
      return grupo.sort((a, b) => a - b)[Math.floor(grupo.length / 2)];
  });

  const pivo = selecionar(medianas, Math.floor(medianas.length / 2));

  const menores = [];
  const maiores = [];
  const iguais = [];

  arr.forEach(num => {
      if (num < pivo) {
          menores.push(num);
      } else if (num > pivo) {
          maiores.push(num);
      } else {
          iguais.push(num);
      }
  });

  if (k < menores.length) {
      return selecionar(menores, k);
  } else if (k < menores.length + iguais.length) {
      return iguais[0];
  } else {
      return selecionar(maiores, k - menores.length - iguais.length);
  }
}

function gerarValoresAleatorios(numRodadas) {
  var valoresAleatorios = [];

  for (var i = 0; i < numRodadas; i++) {
      // Gera um valor aleatório entre 0 e 100
      var valorAleatorio = Math.floor(Math.random() * 101);
      valoresAleatorios.push(valorAleatorio);
  }

  return valoresAleatorios;
}

function preencherVetor(torneio, vetor) {
  vetor.push(torneio);
  return vetor;
}

function ordenarValores(vetorPreenchido) {

  // Usa o método sort para ordenar os valores
  vetorPreenchido.sort(function (x, y) {
    return x - y;
  });

  // Retorna o array ordenado
  return vetorPreenchido;
}
var vetor = [];
var numRodadas = 3
var resultados = gerarValoresAleatorios(numRodadas);
console.log("ARRAY: ", resultados)

const torneio = medianaDasMedianas(resultados)

console.log("A mediana das medianas desse array é: ", torneio)

const vetorPreenchido = preencherVetor(torneio, vetor);
console.log(vetorPreenchido);

let valoresOrdenados = ordenarValores(vetorPreenchido);
console.log(valoresOrdenados);



