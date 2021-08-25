# Modelo para Apresentação do Lab04 - Componentes, Mensagens, Eventos e Barramento

Estrutura de pastas:

```
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
```

# Aluno

- `Gabriel Rodrigues Modesto`

## Tarefa 1 - Web Components e Tópicos

> Nível 1


```html
<dcc-button
  label="Mundo Política"
  topic="noticia/mundo/politica"
  message="Notícias sobre a política"
>
</dcc-button>

<dcc-button
  label="Brasil Política"
  topic="noticia/brasil/politica"
  message="Notícias sobre o Brasil política"
>
</dcc-button>

<dcc-button
  label="Brasil Dinos"
  topic="noticia/brasil/dinos"
  message="Notícias sobre dinossauros brasileiros"
>
</dcc-button>

<dcc-button
  label="Bahia Dinos"
  topic="noticia/bahia/dinos"
  message="Notícias sobre dinossauros bahianos"
>
</dcc-button>
```

---

> Nível 1 - Imagem

![Nível 1](images/tarefa1/nivel1.png)

---

> Nível 2

```html
<dcc-button label="Notícias" topic="noticias/todas" message="Todas as notícias">
</dcc-button>

<dcc-button
  label="Política"
  topic="noticias/politica"
  message="Notícias sobre política"
>
</dcc-button>

<dcc-button
  label="Brasil"
  topic="noticias/brasil"
  message="Notícias sobre o Brasil"
>
</dcc-button>

<dcc-lively-talk
  character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png"
  speech="Eu leio sobre: "
  subscribe="noticias/politica:speech"
>
</dcc-lively-talk>

<dcc-lively-talk
  character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png"
  speech="Eu leio sobre: "
  subscribe="noticias/brasil:speech"
>
</dcc-lively-talk>

<dcc-lively-talk speech="Eu leio sobre: " subscribe="noticias/#:speech">
</dcc-lively-talk>

```

---

> Nível 2 - Imagens

![Nível 2_1](images/tarefa1/nivel2_vazio.png)
![Nível 2_2](images/tarefa1/nivel2_dino.png)
![Nível 2_3](images/tarefa1/nivel2_medico.png)
![Nível 2_4](images/tarefa1/nivel2_enfermeira.png)

---

## Tarefa 2 - Web
Components e RSS > Escreva aqui o código da sua composição de componentes Web
seguida de uma imagem que captura o funcionamento, como foi feito na tarefa
anterior.

---

## Tarefa 3 - Painéis de Mensagens com Timer > Escreva aqui o código
da sua composição de componentes Web seguida de uma imagem que captura o
funcionamento, como foi feito na tarefa anterior.
