(function() {
const localTheme = `
<div class="styt-pul-main">{knot}</div>
`;

MessageBus.int.publish("control/theme/right/load/ready", localTheme);
})();