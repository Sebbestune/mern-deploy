import axios from "axios";

export default axios.create({
  baseURL: "mern-deploy-backend-production.up.railway.app",
  headers: {
    "Content-type": "application/json"
  }
});
