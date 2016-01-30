# easy-style

A convenient wrapper around [free-style](//github.com/blakeembrey/free-style). It removes the need to create style sheets and insert them into the page. It does this for you automatically by lazily creating sheets when required and inserting them into the page asynchronously on the next frame render. And because most components will define all their styles before the first frame renders you will probably end up with just one `<style/>` node for your whole app.

## Installation

`npm install easy-style`

then in your app:

```js
import {style,rule,keyframe} from 'easy-style'
```

## API

### `style(object)`

Calls `freeStyle.registerStyle`. Returns a className.

### `rule(query, object)`

Calls `freeStyle.registerRule`. Registers the rule with the page. Returns `void`.

### `keyframe(object)`

Calls `freeStyle.registerKeyframes`. Returns an animation name.
