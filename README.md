# Next.js with MobX

Demo of using MobX stores in a Next.js app.

## Getting started

1. `yarn`
2. `yarn dev`

In the browser, try navigating to posts (`/post/1` etc.) and clicking "Update".

## Features

The example started from [this blog post](https://www.themikelewis.com/post/nextjs-with-mobx) by Mike Lewis which is an adaptation of the official [`with-mobx` example](https://github.com/zeit/next.js/tree/master/examples/with-mobx). I have added these features:

- Full reactivity
- Safe serialization of stores between server and client
- `useMobxStores()` hook which is a slight wrapper around React context

## Safe serialization

As noted e.g. [here](https://github.com/zeit/next.js/issues/5534#issuecomment-448578052), more complex stores cannot be automatically serialized via the built-in `JSON.stringify` – there can be circular references etc.

So the example implements the "initial data" pattern:

- At the end of `App.getInitialProps`, stores return their plain data representation.
- This is serialized by Next.js and sent to client for hydration.
- In the `render` function, stores are created again from these initial data.
