# Demo: A CI/CD Pipeline
For this Demo, we implemented a simple Node.js (Express.js) server which returns a JSON with a version (e.g. {version: "0.0.0"}) when a GET request is made to the "/".
A simple test was implemented which checks that the version has the expected format.
Two workflows have been implemented.
The first one is call Node.js and starts after a push or a pull request on the main branch. It contains two jobs. The build and the deploy. The build job builds the server while the deploy job deploys it on Heroku.  
After the first flow is completed, the Slack Notification flow starts. This workflow contains only one job which will be triggered only if the first workflow has failed and will send a Slack message to notify the developers.

App on Heroku: https://version-app.herokuapp.com/
