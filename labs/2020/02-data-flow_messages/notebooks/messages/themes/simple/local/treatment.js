(function() {
const localTheme = `
<div class="styt-pul-main">{knot}</div>
`;

MessageBus.int.publish("control/theme/treatment/load/ready", localTheme);
})();