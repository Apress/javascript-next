/* eslint-disable arrow-body-style */

// tag::default-function-expression[]
const getDefaultConn = () => {
  // look up ENV config
  // return appropriate connection
  // as a default assume localhost
  return {
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  };
};

const query = (sql, conn = getDefaultConn()) => {
  // use connection string and sql here to query db
  // conn.connect();
  // conn.query(sql);
  // conn.close();
  return conn;
};
// end::default-function-expression[]
export {
  getDefaultConn,
  query,
};
