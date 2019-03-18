
const onHeaders = require('on-headers');

class Log {
  constructor(req, res) {
    this.dbResponseTime = 0;
    this.numberOfQueries = 0;

    this.req = req;
    this.res = res;

    onHeaders(res, this.addHeader());
  }

  logging() {
    return (a, b) => {
      this.dbResponseTime += b;
      this.numberOfQueries += 1;
    }
  }
  addHeader() {
    const that = this;
    return function () {
      // set if not set by end of request
      if (!this.getHeader('X-Database-Latency')) {
        this.setHeader('X-Database-Latency', `${that.dbResponseTime}ms`);
        this.setHeader('X-Queries', `${that.numberOfQueries}`);
      }
    }
  }
}
