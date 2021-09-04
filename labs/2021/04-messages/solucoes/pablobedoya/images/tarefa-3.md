~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/science/rss:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/design/rss:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate" quantity="3" subscribe="rss/#">
</dcc-aggregator>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png" subscribe="rss/science:speech" speech="News: ">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png" subscribe="rss/design:speech" speech="News: ">
</dcc-lively-talk>

<dcc-lively-talk speech="News :" subscribe="aggregate:speech">
</dcc-lively-talk>

<dcc-timer cycles="10" interval="1000" topic="next/science/rss" subscribe="start/feed:start">
</dcc-timer>

<dcc-timer cycles="5" interval="2000" topic="next/design/rss" subscribe="start/feed:start">
</dcc-timer>

<dcc-button label="Inicia" topic="start/feed">
</dcc-button>
~~~
