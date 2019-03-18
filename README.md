# sequelize-query-execution-time

Inspired by [expressjs/response-time](https://github.com/expressjs/response-time)

- profiling, benchmarking & logging

```js
const log = new Log(req, res);

 const organization = await Organization
      .create(org, { logging: log.logging() });
      ```
      
      
