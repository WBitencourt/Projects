#!/bin/bash

new_version=$(npm version patch)

docker image build -t dymovie-image:$new_version .

docker container run -d -p 3001:3001 -p 3002:3002 --name dymovie-container-$new_version dymovie-image:$new_version

# clear

# rm -rf ./.next

# npm run build

# # Commit the changes to Git
# git add .
# git commit -m "Creating Container"

# # Push the changes to the remote repository
# git push origin master

# # Increment the version number in package.json and get the updated version
# new_version=$(npm version patch)

# docker stop everest-dev-front-end-v1
# docker rm everest-dev-front-end-v1
# docker image ls -q | xargs -I {} docker image rm -f {}
# docker image prune -a -f

# docker build --platform linux/amd64 -t nexus.apps.oito.srv.br:8083/everest-dev-front-end-v1:$new_version .
# docker push nexus.apps.oito.srv.br:8083/everest-dev-front-end-v1:$new_version

# docker build --platform linux/amd64 -t nexus.apps.oito.srv.br:8083/everest-dev-front-end-v1:latest .
# docker push nexus.apps.oito.srv.br:8083/everest-dev-front-end-v1:latest

# # Push the changes to the remote repository
# git push origin master