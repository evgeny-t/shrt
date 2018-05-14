# Shooooort

## How do I run it?

```
npm i -D
npm start
```

## How do I [deploy cloud functions](https://cloud.google.com/functions/docs/deploying/filesystem)?

```
cd functions 
npm i -D
gcloud beta functions deploy proxy --trigger-http
```

`gcloud` should be [set up and configured](https://cloud.google.com/functions/docs/deploying/filesystem). 
The URL of the function should be updated in `src/api.js`.
