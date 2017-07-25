module.exports = {

  development: {
    client: 'pg',
    connection: 'postgrees://localhost/fsa_movies'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
