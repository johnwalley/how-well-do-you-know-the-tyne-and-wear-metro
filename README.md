# How well do you know the Tyne and Wear Metro?

[![Netlify Status](https://api.netlify.com/api/v1/badges/2a111b46-fa9e-4001-8023-41e55b380bfd/deploy-status)](https://app.netlify.com/sites/metro-quiz/deploys)

## Get started

Install the dependencies...

```bash
cd how-well-do-you-know-the-tyne-and-wear-metro
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

### Prior art

https://www.buzzfeed.com/robinedds/how-well-do-you-know-the-tube-map
