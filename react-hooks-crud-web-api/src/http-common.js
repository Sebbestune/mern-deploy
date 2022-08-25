import axios from "axios";

export default axios.create({
  baseURL: "https://mern-deploy-backend-production.up.railway.app/api",
  headers: {
    "Content-type": "application/json"
  }
});

