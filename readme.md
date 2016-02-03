# Angular2 Postit Notes

## Installation
`npm install`

## Running
`npm start`

The behaviour of this will vary depending on environment (see `server.js`:

### development
Will use `webpack-dev-server` to serve up dev code, with live reload etc

### production
Will use `express` to serve up production code from the `target` directory (as produced by `npm run build`)

## CI and Deployment

The repository is tested on TravisCI, and then deployed from there to Heroku:

https://gethin-postits.herokuapp.com/

## Digging in

- `src/components`
    + `postit-notes`: the main postit-notes container
    + `postit-note`: a component for displaying a single postit
- `src/models`
    + `postit`: the model definition and API binding for saving/loading postits

## Further background
Originally based on https://github.com/r-park/angular2-webpack-seed
