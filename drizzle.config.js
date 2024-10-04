/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://car-market-place_owner:25KAwuFxzGMV@ep-odd-waterfall-a5codxy5.us-east-2.aws.neon.tech/car-market-place?sslmode=require',
    }
  };