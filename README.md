# Webpack Module Federation Example

- [App 1](https://helloitsjoe.github.io/module-federation-example/app1)
- [App 2](https://helloitsjoe.github.io/module-federation-example/app2)

A simple example using module federation to include the same header on two
different apps.

This project is essentially the same as the Module Federation
[basic-host-remote](https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote)
example, but I changed some values in the webpack configs and added comments
since I can't find API documentation anywhere.

## Development

This project uses `lerna`. From the project root, run `yarn start` to start dev
servers serving two apps:

- App 1 (port 8081)
- App 2 (port 8082)

The apps are separate, but app 1 exposes its `Header` component and app 2
consumes it. If app 1 makes an update to the header, it's updated in app 2 at
runtime (on page refresh).
