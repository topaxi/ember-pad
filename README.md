# Ember-pad [![Build Status](https://travis-ci.org/topaxi/ember-pad.svg?branch=master)](https://travis-ci.org/topaxi/ember-pad)

This README outlines the details of collaborating on this Ember addon.

## Addon Installation

* `ember install ember-pad`

## Addon usage

As util function

```javascript
import { padStart } from 'ember-pad/utils/pad'
import { padEnd   } from 'ember-pad/utils/pad'

console.log(padStart(5, 2))        // '05'
console.log(padStart('a', 5, ' ')) // '    a'

console.log(padEnd(5, 2))        // '500'
console.log(padEnd('a', 5, ' ')) // 'a    '
```

As handlebars helper

```handlebars
<input type="text" value={{pad-start value 2}}>
<input type="text" value={{pad-end value 2}}>
```

As template literal function:

```javascript
import { padStartTpl } from 'ember-pad/utils/pad'

console.log(padStartTpl`${4}:${2}`(2)) // '04:02'
// OR
console.log(padStartTpl(2)`${4}:${2}`) // '04:02'
```

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License

This project is licensed under the [MIT License](LICENSE.md).
