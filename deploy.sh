#!/bin/bash
ng build --prod
docker build -t doom-viewer .
docker tag doom-viewer neilo40/private:doom-viewer
docker push neilo40/private:doom-viewer

#to run:
#docker run -d -p 4000:80 neilo40/private:doom-viewer
