# Webpack

Essa pasta contém os exercícios de Webpack;

## Conceitos

### O que é webpack?

Em seu núcleo, o webpack é um bundler de módulos estáticos para aplicações JavaScript modernas. Quando o webpack processa sua aplicação, ele cria internamente um gráfico de dependência que mapeia cada módulo que seu projeto precisa e gera um ou mais pacotes.

### Conceitos chave

#### Entry (Ponto de entrada)
Um ponto de entrada indica qual módulo o webpack deve usar para começar a construir seu gráfico de dependência interno. O webpack irá descobrir de quais outros módulos e bibliotecas o ponto de entrada depende (direta e indiretamente).

#### Output (Saída)
A propriedade de saída diz ao webpack onde emitir os pacotes que ele cria e como nomear esses arquivos. O padrão é ./dist/main.js para o arquivo de saída principal e para a pasta ./dist para qualquer outro arquivo gerado.


#### Loaders (Carregadores)
Como default, o webpack só entende arquivos JavaScript e JSON. Carregadores permitem que o webpack processe outros tipos de arquivos e os converta em módulos válidos que podem ser consumidos pelo seu aplicativo e adicionados ao gráfico de dependência.


#### Plugins
Enquanto as carregadeiras são usadas para transformar certos tipos de módulos, os plugins podem ser aproveitados para executar uma gama mais ampla de tarefas como otimização de pacotes, gerenciamento de ativos e injeção de variáveis de ambiente.


#### Mode (modo)
Ao definir o parâmetro de modo para desenvolvimento, produção ou nenhum, você pode habilitar as otimizações incorporadas do webpack que correspondem a cada ambiente. O valor padrão é a produção.


#### Browser Compatibility
Webpack suporta todos os navegadores que são compatíveis com ES5 (IE8 e abaixo não são suportados). webpack precisa do Promise para import() e require.ensure(). Se você quiser suportar navegadores mais antigos, você precisará carregar um polyfill antes de usar essas expressões.



