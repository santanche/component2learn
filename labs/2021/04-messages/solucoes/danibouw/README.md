# Modelo para Apresentação do Lab04 - Componentes, Mensagens, Eventos e Barramento

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* Daniela Bouwman Codeceira

## Tarefa 1 - Web Components e Tópicos

```html
<!-- Buttons -->
<dcc-button label="Mundo Politica"
             topic="noticia/mundo/politica"
             message="política mundial">
</dcc-button>
<dcc-button label="Brasil Politica"
             topic="noticia/brasil/politica"
             message="política do Brasil">
</dcc-button>
<dcc-button label="Brasil Dinos"
             topic="noticia/brasil/dinos"
             message="Dinos do Brasil">
</dcc-button>
<dcc-button label="Bahia Dinos"
             topic="noticia/bahia/dinos"
             message="Dinos da Bahia">
</dcc-button>

<!-- Characters -->

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" 
	speech="Notícia: " 
	subscribe="noticia/+/politica:speech">
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" 
	speech="Notícia: " 
	subscribe="noticia/brasil/+:speech">
</dcc-lively-talk>
<dcc-lively-talk 
	speech="Notícia: " 
	subscribe="noticia/#:speech">
</dcc-lively-talk>
```
![Composition Screenshot](images/image1.png)

## Tarefa 2 - Web Components e RSS
```html
<!-- RSS -->
<dcc-rss source="https://www.wired.com/category/science/feed" 
	subscribe="ciencias/rss:next" 
	topic="rss/science">
</dcc-rss>
<dcc-rss source="https://www.wired.com/category/design/feed" 
	subscribe="design/rss:next" 
	topic="rss/design">
</dcc-rss>

<!-- Aggregator -->
<dcc-aggregator topic="aggregate/science" 
	quantity="4" 
	subscribe="rss/science">
</dcc-aggregator>

<!-- Buttons -->
<dcc-button label="Ciências Próxima" 
	topic="ciencias/rss">
</dcc-button>
<dcc-button label="Design Próxima" 
	topic="design/rss">
</dcc-button>

<!-- Characters -->
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" 
	subscribe="aggregate/science:speech">
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" 
	subscribe="rss/science:speech">
</dcc-lively-talk>
<dcc-lively-talk 
	subscribe="rss/design:speech">
</dcc-lively-talk>

```
![Composition Screenshot](images/image2.png)

## Tarefa 3 - Painéis de Mensagens com Timer
> Escreva aqui o código da sua composição de componentes Web seguida de uma imagem que captura o funcionamento, como foi feito na tarefa anterior.
