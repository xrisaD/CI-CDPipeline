# Demo - Comparing two CI/CD tools: Jenkins vs Github Actions

![](imgs/jenkins-vs-github-actions.png)

A CI/CD Pipeline is a DevOps methodology which includes Continuous Integration, Continuous Delivery and Continuous Deployment.The benefits of applying these practices at the software developement process are huge that is why many companies apply them in our days. You can read more about it [here](https://www.digitalocean.com/community/tutorials/an-introduction-to-continuous-integration-delivery-and-deployment). 
A CI/CD Pipeline consists of some step that have to be  regularly executed. There are multiple tools that you can use to implement your own pipeline such as Jenkins, Github Actions, CircleCI, AWS CodeBuild, Azure DevOps, Atlassian Bamboo, or Travis CI. In this Demo, we will compare Jenkins with Github Actions. 
<br>
**Jenkins** is an open source automation server which enables developers around the world to reliably build, test, and deploy their software.
<br>
**GitHub Actions** is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.
<br>
## 1. Create a Node.js server
For this Demo, we implemented a simple Node.js (Express.js) server which returns a JSON with a version (e.g. {version: "0.0.0"}) when a GET request is made to the "/".
A simple test was implemented which checks that the version has the expected format.

## 2. Create a CI/CD with Github Actions
Two workflows have been implemented.
The first one is call Node.js and starts after a push or a pull request on the main branch. It contains two jobs. The build and the deploy. The build job builds the server while the deploy job deploys it on Heroku.  
After the first flow is completed, the Slack Notification flow starts. This workflow contains only one job which will be triggered only if the first workflow has failed and will send a Slack message to notify the developers.

App on Heroku: https://version-app.herokuapp.com/

## 2. Create a CI/CD with Jenkins
