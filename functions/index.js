const axios = require("axios");
const api = "https://impraise-shorty.herokuapp.com/";

exports.proxy = (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:8080");
  res.set("Access-Control-Allow-Methods", "GET,POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  console.log("req", req.method, req.path, req.body);
  if (req.method === "OPTIONS") {
    res.status(200).send("");
  } else {
    axios({
      method: req.method,
      url: `${api}${req.path}`,
      data: req.body
    })
      .then(response => {
        return res.status(response.status).json(response.data);
      })
      .catch(error => {
        const payload = {
          path: error.request.path,
          message: error.message,
          status: error.response.status,
          data: error.response.data
        };
        console.error("axios error", payload);
        res.status(error.response.status).json(payload);
      });
  }
};
