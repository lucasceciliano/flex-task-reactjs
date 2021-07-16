export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#ee1a1a'],
            user: 'https://github.com/lucasceciliano.png'
          },
          {
            id: 2,
            content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
            labels: ['#ee1a1a'],
            user: 'https://github.com/lucasceciliano.png'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#ee1a1a'],
            user: 'https://github.com/lucasceciliano.png'
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            labels: ['#f1da0a'],
            user: 'https://github.com/lucasceciliano.png'
          },
          {
            id: 5,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#f1da0a'],
            user: 'https://github.com/lucasceciliano.png'
          },
        ]
      },
      { 
        title: 'Em andamento', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://github.com/lucasceciliano.png'
          }
        ]
      },
      { 
        title: 'Finalizados', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            labels: ['#54e41b'],
            user: 'https://github.com/lucasceciliano.png'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#f1da0a'],
            user: 'https://github.com/lucasceciliano.png'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
            
          }
        ]
      },
      { 
        title: 'Concluídos', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }