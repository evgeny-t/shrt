const pre = "https://us-central1-my-bio-163107.cloudfunctions.net/proxy";
// const pre = "http://localhost:8010/my-bio-163107/us-central1/proxy";

export const create = url => {
  return fetch(`${pre}/shorten`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      url
    })
  }).then(response => (response.ok ? response.json() : Promise.reject()));
};

export const get = shortcode => {
  return fetch(`${pre}/${shortcode}`).then(response =>
    response.headers.get("Location")
  );
};

export const stats = shortcode =>
  fetch(`${pre}/${shortcode}/stats`).then(response => response.json());
