## deploy command
```sh
$ npm run build && gsutil -h "Cache-Control:private, max-age=0, no-transform" cp -r dist/* gs://site/
```