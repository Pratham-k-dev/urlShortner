import Redis from "ioredis";

const redis = new Redis({
  host: "redis", // docker later → redis
  port: 6379,
});

export default redis;