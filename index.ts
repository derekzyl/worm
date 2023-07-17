class Worm {
  //TODO add a default connection for sql and no sql
  // todo add a way to schema validator
  //todo look for a mutual relationship between sql and no sql
  constructor(connection) {
    this.connection = connection;
  }
  connection(url) {
    return url;
  }
  schema() {}
  models() {}
  data_processor() {
    function data() {}
    function ma() {}
    return {
      data,
      ma,
    };
  }
}
