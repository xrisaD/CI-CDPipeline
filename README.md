# Demo - Comparing two CI/CD tools: Jenkins vs Github Actions

![](imgs/jenkins-vs-github-actions.png)

A CI/CD Pipeline is a DevOps methodology which includes Continuous Integration, Continuous Delivery and Continuous Deployment.The benefits of applying these practices at the software developement process are huge that is why many companies apply them in our days. You can read more about it [here](https://www.digitalocean.com/community/tutorials/an-introduction-to-continuous-integration-delivery-and-deployment). 
A CI/CD Pipeline consists of some step that have to be  regularly executed. There are multiple tools that you can use to implement your own pipeline such as Jenkins, Github Actions, CircleCI, AWS CodeBuild, Azure DevOps, Atlassian Bamboo, or Travis CI. In this Demo, we will compare Jenkins with Github Actions. 
<br>
**Jenkins** is an open source automation server which enables developers around the world to reliably build, test, and deploy their software.
<br>
**GitHub Actions** is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.
<br>

## 1. A Node.js server
For this Demo, we implemented a simple Node.js (Express.js) server which returns a JSON with a version (e.g. {version: "0.0.0"}) when a GET request is made to the "/".
A simple test was implemented which checks that the version has the expected format.

## 2. A CI/CD with Github Actions

### Description:
Three workflows have been implemented by just adding 3 yaml files under the .github/workflows directory at the Github repository.
The first one is called *onpull-request* and starts after a pull request at the main branch. It contains one job which builds and runs the tests. The second one is called *onpush* and starts after a push at the main branch. It builds, runs the tests and deploy the app on Heroku. 
The third one is called *slack-notify*. After one of the two flows is completed, the Slack Notification flow starts. This workflow contains only one job which will be triggered only if the first workflow has failed and will send a Slack message to notify the developers about the failure.
### The Pipeline:
![](imgs/pipeline-github-actions.png)
### The App:
App on Heroku: https://version-app.herokuapp.com/

## 2. A CI/CD with Jenkins

## Comparision
