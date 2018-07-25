# Twitter Tweet Viewer

This simple web application consumes Twitter's REST API
to display tweets from three different timelines. Which timelines to display, the number 
of tweets to show, and the color scheme of the application is customizable.
These settings persist to the browser using HTML5 LocalStorage.


This application was built using React and the Material-UI framework.
Application requests for the Twitter API are handled by the `twitter-proxy` npm package.
Static files are served using an http server and the `serve-handler` package.

## Setup

To install the dependencies use `npm install` in both the root of the project and in /react-client.

Provide your twitter api key and secret to the twitter proxy by saving them in config.json

```
{
  "consumerKey": "< paste your Twitter API key here >",
  "consumerSecret": "<%- paste your Twitter Api Secret here %>",
  "accessToken": "",
  "accessTokenSecret": "",
  "port": "7890"
}
```

Navigate to `/react-client` and run `npm run build` to generate the static files required under `react-client/build`

## Running

To start the http server and proxy server use `npm start` at the root of the project.

The http server will server the static files under `react-client/build` at http://localhost:8080

## Live Demo

A copy of this application is deployed on an AWS EC2 instance and can be viewed at the following url: 

http://ec2-18-222-130-124.us-east-2.compute.amazonaws.com