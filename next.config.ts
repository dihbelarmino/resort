import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "23d45f6g8h9jkl3mn0pqr5tuv7wxy2ab1cde",
    DATABASE_URL: "mysql://root:f1bc817e10df61923b49@iatech.space:3306/resort",
  },
};

export default nextConfig;
