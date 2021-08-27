# Aluno
* Altieres Schincariol Netto

## Tarefa 1 - Web Components e Tópicos

> Escreva aqui o código da sua composição de componentes Web, como mostra o exemplo a seguir:

~~~html
<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="Calor extremo no Canadá e frio recorde no Brasil, veja como o horóscopo dessa semana pode te ajudar a selecionar a melhor pochete para o seu outfit.">
</dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Acre, você ACREdita?">
</dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Foi encontrado o primeiro fóssil de dinossauro na Ilha do Mel-PR. Graças ao ocorrido, decidiram batizá-lo de Melinossauro.">
</dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Confira o estranho caso do dinossauro que foi encontrado em uma fábrica de beneficiamento de chocolate de Ilhéus-BA nessa quinta-feira. O CEO da Cacau Colmeia informou que irão produzir uma linha de produtos de ovos de dinossauro de chocolate em comemoração ao ocorrido.">
</dcc-button>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png" subscribe="noticia/brasil/#:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png" subscribe="noticia/+/politica:speech">
</dcc-lively-talk>

<dcc-lively-talk subscribe="noticia/#:speech">
</dcc-lively-talk>
~~~

## Tarefa 2 - Web Components e RSS
> Escreva aqui o código da sua composição de componentes Web, seguindo a mesma abordagem da tarefa anterior.

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rss:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>

<dcc-lively-talk speech="Deign: " subscribe="rss/design:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="Ciência: " subscribe="rss/science:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Agregadas Ciência: " subscribe="aggregate/science:speech">
</dcc-lively-talk>

<dcc-button label="Ciências Próxima" topic="next/rss">
</dcc-button>

<dcc-button label="Design Próxima" topic="next/rss">
</dcc-button>
~~~

## Tarefa 3 - Painéis de Mensagens com Timer
> Escreva aqui o código da sua composição de componentes Web, seguindo a mesma abordagem da tarefa anterior.

~~~html

~~~