module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("", "https://staging-dot-saya-backend.et.r.appspot.com"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9c8fab1fbbacf946ee8896195f67e7fc"),
    },
  },
});
