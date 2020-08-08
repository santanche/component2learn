(function() {
const localTheme = `
{knot}
`;

MessageBus.int.publish("control/theme/start/load/ready", localTheme);
})();