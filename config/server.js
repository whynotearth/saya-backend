module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("", "http://13.212.85.120:1337"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "c8b41c237c142726e45d646e3cd6d5c7"),
    },
  },
});
