# Componentes, Mensagens, Eventos e Barramento
*Lab de Componentização e Reúso de Software 21/08/2021*

Esse lab será voltado a componentes na Web usando a implementação do Digital Content Component (DCC).

Utilize o ambiente [DCC Playground](https://harena-lab.github.io/harena-docs/js/harena/dccs/playground/) testar a sua resposta, em seguida, copie e cole a resposta na respectiva resposta.

Utilize o ambiente da seguinte maneira:
1. Escreva o código em HTML no painel `Editor`
2. Clique no botão `Render` para que ele execute o código
3. Veja o resultado da execução no painel `Result`
4. Mensagens enviadas por componentes podem ser vistas no painel `Messages`

Para esta atividade, há um [Tutorial de DCCs](https://harena-lab.github.io/harena-docs/dccs/tutorial/) e uma [Referência](https://harena-lab.github.io/harena-docs/dccs/reference/) disponíveis para a atividade.

## Tarefa 1 - Web Components e Tópicos
>``<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="Mundo Política..."></dcc-button>``
>``<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Brasil Política..."></dcc-button``
>``<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Brasil Dinossaurus..."></dcc-button>``
>``<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Dinossaurus da Bahia..."></dcc-button>``

>``<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png" subscribe="noticia/brasil/#:speech"></dcc-lively-talk>``
>``<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png" subscribe="noticia/#/politica:speech" ></dcc-lively-talk>``
>``<dcc-lively-talk subscribe="noticia/#:speech"></dcc-lively-talk>``

## Tarefa 2 - Web Components e RSS
>``<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png" subscribe="rss/science:speech"></dcc-lively-talk>``
>``<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png" subscribe="aggregate/science:speech" ></dcc-lively-talk>``
>``<dcc-lively-talk subscribe="rss/design:speech"></dcc-lively-talk>``

>``<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/science:next" topic="rss/science"></dcc-rss>``
>``<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/design:next" topic="rss/design"></dcc-rss>``
>``<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science"></dcc-aggregator>``

>``<dcc-button label="Ciências Próxima" topic="next/science"></dcc-button>``
>``<dcc-button label="Design Próxima" topic="next/design"></dcc-button>``

## Tarefa 3 - Painéis de Mensagens com Timer
>``<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png" subscribe="rss/science:speech" ></dcc-lively-talk>``
>``<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png" subscribe="rss/design:speech"></dcc-lively-talk>``
>``<dcc-lively-talk subscribe="aggregate/feed:speech"></dcc-lively-talk>``

>``<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/science:next" topic="rss/science"></dcc-rss>``
>``<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/design:next" topic="rss/design"></dcc-rss>``

>``<dcc-aggregator topic="aggregate/feed" quantity="3" subscribe="rss/#"></dcc-aggregator>``

>``<dcc-timer cycles="50" interval="2000" topic="next/science" subscribe="start/feed:start"></dcc-timer>``
>``<dcc-timer cycles="50" interval="1000" topic="next/design" subscribe="start/feed:start"></dcc-timer>``

>``<dcc-button label="Inicia" topic="start/feed"></dcc-button>``
