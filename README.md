# ZuedevUptimeMonitors

> Stuff I monitor for uptime

A Deno-powered uptime monitoring repository hosted on [GitHub](https://github.com/zuedev/ZuedevUptimeMonitors).

Careful, the `live` branch is known to mutate!

## How does it work?

A GitHub Actions workflow periodically runs the Deno script from the `main` branch, which checks each configured service and records the results. Any changes are committed and pushed to the `live` branch, which acts as a simple database of historical uptime data.
