# StringInstance

## Description

### Package that check instances of string

## Importing

### The module is export with ES5

``` JavaScript
const stringinstance = require("stringinstance")
```

## Usage (Hopefully functional)

### Check Instances of string

``` JavaScript
console.log(StringInstance("1111", "1")); // return 4
// There are four 1 in string
```

## Error

### "1st Argument must be string"

``` JavaScript
StringInstance(null, "1"); // Throw error
//Or
StringInstance(null, null); // Throw error
// null can be other that's not string
```

### "2nd Argument must be string"

``` JavaScript
StringInstance("1111", null); // Throw error
//Or
StringInstance(null, null); // Throw error
// null can be other that's not string
```

[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
