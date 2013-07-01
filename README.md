###What is this?
Just a simple logger module for NodeJS

###How to use

```javascript
var logger = require('./logger');
logger.log('User authorization success!');
```
Or even:

```javascript
var log = require('./logger').log;
log('User authorization success!');
```


Simple as that. File name will be **YEAR_MONTH_DAY.log**. For example: 201271.log