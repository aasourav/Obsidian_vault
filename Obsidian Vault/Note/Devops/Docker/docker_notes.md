docker version
docker info
docker => it will show you all the command
docker command line structure 
 docker <command> <sub-command> (options)

image is the application we want to run.
A container is an instance of that image running as a process.
you can have many containers  running  off the same  image.


## Container
==================

what happens in 'docker container run'

to run an images in a container 
// this command (written below) is for works foreground
docker container run --publish 8080:80 nginx //note nginx is web server

// to run docker in background 
docker container run --publish 8080:80 --detach nginx
docker container run --publish 8080:80 --detach --name webhost nginx

// Stopping by Container ID 
docker stop CONTAINER_ID or Name

After running the `docker stop` command, Docker will attempt to stop the container gracefully, allowing processes inside the container to clean up before it shuts down. If the container doesn't stop after a few seconds, you can try the more forceful `docker kill` command to immediately stop it:

// list of default running container 
docker container ls

//  both running and stopped containers
docker container ls

// stop container docker container stop <container id>  //you can just type prefix but just confirm it's unique

// to see the logs of the container 
docker container logs <container name>

// to see the process inside the running container
docker container top <container name>

docker container --help => to see the command 

// to remove all container
docker container rm <container ids> //make sure there are no running containers
or just add `f` then it will remove running and stopped both.



//process list in one container
docker container top

//details of one container config
docker container inspect

//performance stats for all containers
docker container stats


// Getting a shell inside containers

docker container run -it => start new container width bash interactively
docker container exec -it => run that already running container.




