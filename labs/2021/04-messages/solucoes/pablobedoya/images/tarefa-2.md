~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/science/rss:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/design/rss:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png" subscribe="aggregate/science:speech" speech="News: ">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png" subscribe="rss/science:speech" speech="News: ">
</dcc-lively-talk>

<dcc-lively-talk subscribe="rss/design:speech" speech="News: ">
</dcc-lively-talk>


<dcc-button label="Ciências Próxima" topic="next/science/rss">
</dcc-button>

<dcc-button label="Design Próxima" topic="next/design/rss">
</dcc-button>
~~~
