# 3KET
Repository for our finishing project, 3KET.


## Running and development

We use a Docker :whale: container in the development of this project to not deal with dependency conflicts and 
the _"works on my machine"_ dilemma.

### How to run a development environment

1. [Install Docker](https://docs.docker.com/get-docker/)
   
2. [Install Docker Compose](https://docs.docker.com/compose/install/)
    
    If you install [Docker Desktop](https://docs.docker.com/desktop/), Docker Compose is bundled in the package.
   

3. Clone the repository
```shell
git clone https://github.com/3KET/3ket.github.io.git
```

4. [Grab a personal access token from GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)


6. Copy the `docker.env.example` file with the name `docker.env` and change the variables.
   
   Tip: You can get your Git username and email as follows:
   
   `git config user.name` and `git config user.email`


5. To use the development environment, run the commands;

```shell 
cd 3ket.github.io && \
docker compose up -d && \
docker exec -ti 3ketgithubio_environment_1 /bin/sh
```

Now you have an interactive shell session to the Docker image with Alpine Linux. 
You can safely run `npm install` or `yarn install` without thinking about dependency issues.