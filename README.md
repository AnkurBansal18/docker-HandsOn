create an image :

```
docker build -t tagname .

```

execution (running a container) :

```
docker run -it --init --publish [hostMachinePort]:[containerPort] tagname

```

flag's explaination :

1. -t : used to provide a tagname to the image
2. -it : opens up a interactive terminal
3. -init : inserts a tiny init-process into the container as the main process, and handles reaping of all processes when the container exits.

4. --publish : ( -p for short) to publish a port for our container, we'll use the --publish flag on the docker run command. The format of the --publish command is [host_port]:[container_port] . So if we wanted to expose port 3001 inside the container to port 5000 outside the container, we would pass 5000:3001 to the --publish flag.
   example usecase: if you have a local project and you built a docker image of it. Now you do docker run on it and creates a container out of it. The project configs will run absolutely fine with in the container but when you make a req to localhost:5000 , it will crash. So, to stablish a communication b/w container and local env, we use --publish.
