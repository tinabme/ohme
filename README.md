ohMe
=========

A small node module providing utility methods to search JavaScript objects by key or value. Can be very handy with large shared objects and variable search values.

### Installation

  npm install ohme --save

### Usage

Simply reqiure ohme on the base page and its ready to use.
```sh
  const ohme = require('ohme');
  const phoneListObj = {
    tina: '555-1212',
    sam: '444-4040',
    jane: '777-1212'
  }
```
Using the above phoneList object to get the phone number (value) by a person (key) use this code:
```sh
  const phone = ohme.getVal(phoneListObj, 'jane')   //returns '777-1212'
```

Using the above phoneList object to get the person (key) by a phone number (value) use this code:
```sh
  const phone = ohme.getVal(phoneListObj, '777-1212')   //returns 'jane'
```
### Tests
  npm test

### Contributing ##
If you would like to contribute code, please do the following:

1. Fork this repository and make your changes.
2. Write tests for any new functionality or bug fixes.
3. Add your name to the "contributors" section in the `package.json` file.
4. Squash all of your commits into a single commit via `git rebase -i`.
5. Run the tests by running `npm install && make test` from the source directory.
6. When those pass, send the Pull Request off to me for review!

Please do not iterate the package.json version number – I will do that myself
when I publish it to NPM.

### Style-Guide ###
Please follow this simple style-guide for all code contributions:

* Indent using spaces.
* camelCase all callables.
* Use semi-colons.
* Place a space after a conditional or function name, and its conditions/arguments. `function (...) {...}`

### Release History
* 0.1.0 Initial release
