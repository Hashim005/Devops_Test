# <ins>CI/CD Pipeline for Node.js Application with Docker, GitHub Actions, and AWS EC2</ins>

This repository demonstrates the implementation of a **CI/CD pipeline** for a basic **Node.js application**, leveraging **Docker**, **GitHub Actions**, and **AWS EC2**. Below is a comprehensive guide.

---

## <ins>Table of Contents</ins>

1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Process Summary](#process-summary)
4. [Step-by-Step Implementation](#step-by-step-implementation)
   - [Node.js Application Setup](#1-nodejs-application-setup)
   - [Dockerize the Application](#2-dockerize-the-application)
   - [Setup GitHub Actions Workflow](#3-setup-github-actions-workflow)
   - [Configure AWS EC2 and Runner](#4-configure-aws-ec2-and-runner)
   - [Automated Deployment](#5-automated-deployment)
5. [Outcome](#outcome)
6. [Learnings](#learnings)
7. [Contact](#contact)

---

## <a name="overview"></a>Overview

This project demonstrates:

- **CI/CD Automation**: Automates the build, test, and deployment of a Node.js application on code push.
- **Dockerization**: Ensures portability and consistency through containerization.
- **AWS Deployment**: Utilizes a self-hosted GitHub Actions runner on AWS EC2 for hosting the application.

---

## <a name="technologies-used"></a>Technologies Used

- **Node.js**: For building the application.
- **Docker**: For containerizing the application.
- **GitHub Actions**: For CI/CD workflow automation.
- **AWS EC2**: For hosting and deployment.
- **Self-Hosted Runner**: To execute GitHub Actions workflows on AWS EC2.

---

## <a name="process-summary"></a>Process Summary

1. Created a basic **Node.js application** and containerized it using **Docker**.
2. Set up a **GitHub Actions workflow** for CI/CD.
3. Configured an **AWS EC2 instance** as a self-hosted runner.
4. Automated the **build, test, and deployment** process on every push to the master branch.
5. Verified successful hosting of the application on the EC2 instance.

---

## <a name="step-by-step-implementation"></a>Step-by-Step Implementation

### <a name="1-nodejs-application-setup"></a>1. Node.js Application Setup

Created a basic `server.js` file


### <a name="2-dockerize-the-application"></a>2. Dockerize the Application

Created a Dockerfile:

```
dockerfile
Copy code
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```


Built and tested the Docker image:
```
docker build -t node-app .
docker run -p 3000:3000 node-app
```


 ### <a name="3-setup-github-actions-workflow"></a>3. Setup GitHub Actions Workflow
 
> Added a workflow file .github/workflows/workflow.yml:

```
name: CI/CD Pipeline

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm install

      - name: Build and Test
        run: npm run build && npm test

      - name: Build Docker Image
        run: docker build -t node-app .

  deploy:
    needs: build
    runs-on: self-hosted
    steps:
      - name: Deploy Application
        run: |
          docker stop node-app || true
          docker rm node-app || true
          docker run -d -p 3000:3000 --name node-app node-app
```


### <a name="4-configure-aws-ec2-and-runner"></a>4. Configure AWS EC2 and Runner

> Launch EC2 Instance
> Selected Ubuntu 20.04 as the base image.
> Configured security groups to allow ports 22 (SSH) and 3000 (HTTP).
> Install and Configure GitHub Runner
> Downloaded and configured the runner:


### <a name="5-automated-deployment"></a>5. Automated Deployment

- Upon pushing changes to the master branch:
- GitHub Actions workflow automatically built and tested the application.
- Docker image was built and deployed to the EC2 instance.
- Verified the application by accessing:

[http://<EC2_PUBLIC_IP>:3000](http://65.0.131.179:3000/server)

## <a name="outcome"></a>Outcome

- **Pipeline Success** : Successfully automated the build, test, and deployment process.
- **Hosted Application** : Application is accessible via the public IP of the EC2 instance.

## <a name="learnings"></a>Learnings

- **CI/CD Concepts** : Hands-on experience with GitHub Actions for automation.
- **Dockerization** : Created consistent and portable application environments.
- **AWS Deployment** : Managed deployment using a self-hosted runner on AWS EC2.

## <a name="contact"></a>Contact
Have questions or feedback? Feel free to reach out at:

Email: hashimmuhammed2001@gmail.com
