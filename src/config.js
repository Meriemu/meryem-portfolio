// config.js
const config = {
  development: {
    apiUrl: "http://localhost:3001/api",
  },
  production: {
    apiUrl: "https://meryem-portfolio.vercel.app/api",
  },
};

const getConfig = () => {
  const env = process.env.NODE_ENV || "development";
  return config[env];
};

export default getConfig();
