# sequelize-query-execution-time

- profiling, benchmarking & logging

```js
const log = new Log(req, res);

 const organization = await Organization
      .create(org, { logging: log.logging() });
      ```
      
      
