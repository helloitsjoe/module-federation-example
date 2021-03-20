# Webpack Module Federation Example

- [Host app](https://helloitsjoe.github.io/module-federation-example/host)
- [Consuming app](https://helloitsjoe.github.io/module-federation-example/consumer)

A simple example using module federation to include the same header on two
different apps.

This project is essentially the same as the Module Federation
[basic-host-remote](https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote)
example, but I changed some values in the webpack configs and added comments
since I can't find API documentation anywhere.

## Development

This project uses `lerna`. From the project root, run `yarn start` to start dev
servers serving two apps:

- Host App (port 8081)
- Consuming App (port 8082)

The apps are separate, but the host exposes its `Header` component and the
consumer... consumes it. If the host makes an update to the header, it's updated
in the consumer at runtime (on page refresh).
