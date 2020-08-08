# Selected DCCs

## Trigger DCC (`<dcc-trigger>`)

A visual element that triggers an action. Its standard shape is a button, but it can be also an image or an element customized by the author.

### Syntax

~~~html
<dcc-trigger id="id"
             label="label"
             image="image"
             action="action"
             divert="divert"
             value="value">
</dcc-trigger>
~~~

* `id` - unique id of the trigger;
* `label`:
  * textual button - textual label showed in the button;
  * image trigger - the title of the image;
* `image` (optional) - when the trigger is an image, it is the path of the image file;
* `action` (optional) - the topic of the message sent by the trigger to activate an action; when the action is not specified, the topic is built from the label ("trigger/<label>/clicked");
* `divert` (optional) - how the trigger diverts the course of action: forward, round, or enclosed;
* `value` (optional) - the message body the accompanies the topic.

### Examples

Textual button trigger that sends the following message when clicked:
* topic - `button/on/clicked`
* message body - `"message to you"`

~~~html
<dcc-trigger label="On"
             action="button/on/clicked"
             value="message to you">
</dcc-trigger>
~~~

## Slider DCC (`<dcc-slider>`)

An input component presented as a slider.

### Syntax

~~~html
<dcc-slider id="id"
            statement="statement"
            variable="variable"
            value="current value"
            mandatory
            min="minimal value"
            max="maximal value"
            index>
</dcc-slider>
~~~

* `id` - unique id of the slider;
* `statement` - statement presented before the slider;
* `variable` - name of the variable related to the input value;
* `value` - current value of the slider;
* `mandatory` - defines if the user must select some value - i.e., the slide must be moved;
* `min` - minimal value accepted;
* `max` - maximal value accepted;
* `index` - defines if the index is presented besides the slider.

### Examples

A simple example:

~~~html
<dcc-slider variable="age" value="1" min="1" max="130" index>Select your age:</dcc-slider>
~~~


## Lively Talk DCC (`<dcc-lively-talk>`)

An animated image that also displays a text inside a ballon. Usually adopted for animated dialogs.

### Syntax

~~~html
<dcc-lively-talk duration="duration" 
                 delay="delay"
                 direction="direction"
                 character="character"
                 speech="speech">
</dcc-lively-talk>
~~~

* `duration` - duration of the animation (duration=0 means a static image);
* `delay` - delay before the animation is started;
* `direction` - direction of the animation (`left` (default) or `right`);
* `character` - character that appears in the image;
* `speech` - text of the speech.

When a Lively Talk DCC receives a message, it shows the body of the message as a speech in the ballon.

### Examples

Available characters in the playground: nurse, doctor, and patient.

A static patient showing the speech "Please, help me!"

~~~html
<dcc-lively-talk duration="0"
                 character="patient"
                 speech="Please, help me!">
</dcc-lively-talk>
~~~

An animated nurse that enters in 2 seconds and shows the speech "Doctor, please you have to evaluate a man!"

~~~html
<dcc-lively-talk duration="2s"
                 character="nurse"
                 speech="Doctor, please you have to evaluate a man!">
</dcc-lively-talk>
~~~

An animated doctor that enters in 2 seconds after waiting 2 seconds and shows the speech "Ok, I'm on my way." The doctor's animation goes in the right direction.

~~~html
<dcc-lively-talk duration="2s"
                 delay="2s"
                 direction="right"
                 character="doctor"
                 speech="Ok, I'm on my way.">
</dcc-lively-talk>
~~~

## RSS DCC `<dcc-rss>`

Fetches items from an RSS feed and publishes them as messages on the bus.

The attribute `source` specifies the address of the source of the feed. When a `start` is triggered, the component reads the feed and deploys the messages.

* `source` - the source of the RSS feeds;
* `publish`  - the topic to be published in the message (default is `dcc/rss/post`);
* `interval` - the interval between the publication of the messages in milliseconds (default is 1000).

Roles of notifications:
`start` - starts a cyclical process of publishing one item per interval;
`step` - publishes one RSS item (the next in a sequence);
`stop` - stops the cyclical process.

~~~html
<dcc-trigger label="News" action="next/rss">
</dcc-trigger>

<dcc-rss source="https://www.wired.com/category/science/feed" publish="rss/science">
  <subscribe-dcc topic="next/rss" role="step"></subscribe-dcc>
</dcc-rss>
~~~

~~~html
<dcc-trigger label="Next Item" action="next/rss">
</dcc-trigger>

<dcc-rss source="https://www.wired.com/category/science/feed">
  <subscribe-dcc topic="next/rss" role="step"></subscribe-dcc>
</dcc-rss>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="News ">
  <subscribe-dcc topic="dcc/rss/post"></subscribe-dcc>
</dcc-lively-talk>
~~~

## Aggregator DCC (`<dcc-aggregator>`)

Aggregates items of messages, as RSS messages.

* `publish` - the topic to be published in the message (default is `dcc/rss/post`);

* `quantity` - the quantity of messages in the aggregation.

~~~html
<dcc-trigger label="Next Item" action="next/rss">
</dcc-trigger>

<dcc-rss publish="rss/science" source="https://www.wired.com/category/science/feed">
  <subscribe-dcc topic="next/rss" role="step"></subscribe-dcc>
</dcc-rss>

<dcc-aggregator publish="aggregate/science" quantity="3">
  <subscribe-dcc topic="rss/science"></subscribe-dcc>
</dcc-aggregator>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="News ">
  <subscribe-dcc topic="rss/science"></subscribe-dcc>
</dcc-lively-talk>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="patient"
                 speech="News ">
  <subscribe-dcc topic="aggregate/science"></subscribe-dcc>
</dcc-lively-talk>
~~~

# Subscribe

## Subscribing Messages and Connecting Components (`<subscribe-dcc>`)

A DCC can subscribe to message in such a way that whenever the message appears on the bus, it will receive it.

For each subscribed message a DCC declares a `<subscribe-dcc>` inside its element. With the following syntax:

~~~html
<subscribe-dcc topic="message"></subscribe-dcc>
~~~

* message - specifies the subscribed message

The following example shows the message `I am a doctor.` when the button with the label `Talk` is triggered.

~~~html
<dcc-trigger label="Talk" action="send/message" value="I am a doctor.">
</dcc-trigger>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="Hello, ">
  <subscribe-dcc topic="send/message"></subscribe-dcc>
</dcc-lively-talk>
~~~

The following example shows a character that tells you "Hello *your name*" when you type your name.

~~~html
<dcc-input-typed variable="name">Type your name:</dcc-input-typed>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="Hello ">
  <subscribe-dcc topic="var/name/changed"></subscribe-dcc>
</dcc-lively-talk>
~~~

Or how a character tells you "Your age is *your age*" when you define your age in the slider.

~~~html
<dcc-slider variable="age" min="1" max="130" index>
Select your age:
</dcc-slider>

<dcc-lively-talk character="doctor"
                 speech="Your age is  ">
  <subscribe-dcc topic="var/age/changed"></subscribe-dcc>
</dcc-lively-talk>
~~~

# Publish/Subscribe

## Topic Filters and Wildcards

In the subscription process, it is possible to specify a specific Topic Name or a Topic Filter, which works as a regular expression representing a set of possible Topic Names.

Wildcards are represented by the special `#` and/or `+` characters, appearing inside a Topic Name in the subscription process. They enable the subscription of a set of topics, since they generically represent one or more Topic Levels, according to the following rules:

## Multilevel Wildcard `#`
The wildcard `#` can be used only in two positions in the Topic Filter:
* alone (the filter is only a `#`) - matches any Topic Name with any number of levels;
* end of the Topic Name (always preceded by a `/ `) -  matches any number of Topic Levels with the prefix specified before the wildcard.

## Single Level Wildcard `+`
Only a single Topic Level can be matched by the wildcard  `+`, which represents any possible complete Topic Level Label. The `+` wildcard can appear only in four positions:
* alone (the filter is only a `+`) - matches any Topic Label in a single level (without slashes);
* beginning of the Topic Filter, always followed by a slash;
* end of the Topic Filter, always preceded by a slash;
* middle of the Topic Filter, always between two slashes.

The following example show messages selectively displayed.

~~~html
<dcc-trigger label="Disease"
             action="news/disease"
             value="new disease">
</dcc-trigger>

<dcc-trigger label="Medication"
             action="news/medication"
             value="new medication">
</dcc-trigger>

<dcc-lively-talk duration="0s"
                 character="doctor"
                 speech="I heard about a ">
  <subscribe-dcc topic="news/#"></subscribe-dcc>
</dcc-lively-talk>

<dcc-lively-talk duration="0s"
                 character="nurse"
                 speech="I heard about a ">
  <subscribe-dcc topic="news/disease"></subscribe-dcc>
</dcc-lively-talk>

<dcc-lively-talk duration="0s"
                 character="patient"
                 speech="I heard about a ">
  <subscribe-dcc topic="news/soccer"></subscribe-dcc>
</dcc-lively-talk>
~~~
