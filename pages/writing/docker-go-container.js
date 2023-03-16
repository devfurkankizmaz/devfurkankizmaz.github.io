import Layout from "@/sections/Layout";
import Image from "next/image";
import golangdocker from "@/public/golang-docker.png";
import Link from "next/link";

export default function DockerGoArticle() {
  return (
    <>
      <Layout>
        <div className="px-4 mt-10">
          <div className="flex flex-col mx-14 space-y-4">
            <h2 className="text-5xl font-extrabold">
              Building Docker Containers for Go Apps
            </h2>
            <h1 className="pt-2">3-16-2023</h1>
            <Image
              className="pt-5"
              src={golangdocker}
              alt="user profile picture"
            />
            <h1 className="text-2xl font-extrabold">Create a Go Application</h1>
            <p>
              Let's create the application that we will make a container. Type
              the following code into the terminal for creating Go Project
            </p>
            <section className="rounded-md bg-nosferatu-200 py-2 pl-2 text-black flex">
              $&nbsp;&nbsp;<div className="text-red">mkdir</div>&nbsp;go-docker-app
            </section>
            <p>
              Change to the directory of the project and init, get go modules for required dependency.
            </p>
            <section className="rounded-md bg-nosferatu-200 py-2 pl-2 text-black">
              <div className="flex">$&nbsp;&nbsp;<div className="text-green">cd</div>&nbsp;go-docker-app</div>
              <div className="flex">$&nbsp;&nbsp;go mod init go-docker-app</div>
              <div className="flex">$&nbsp;&nbsp;go get -u github.com/gin-gonic/gin</div>
            </section>
            <p>
              We'll creating Greeter server. Create a new file called main.go
            </p>
            <p className="underline"><Link href="https://github.com/devfurkankizmaz/go-docker/blob/main/main.go">main.go</Link></p>
            <h2 className="text-2xl font-extrabold">
            Defining the Docker image using a Dockerfile
            </h2>
            <p>
              Defining the Docker image for our Go app. Create a new file called "Dockerfile" inside the root directory. Following are the contents of the Dockerfile
            </p>
            <p className="underline"><Link href="https://github.com/devfurkankizmaz/go-docker/blob/main/Dockerfile">Dockerfile</Link></p>
            <h2 className="text-2xl font-extrabold">
            Build and Run the Docker image
            </h2>
            <p>That we have the Dockerfile defined, let’s build and run the docker image</p>
            <h2 className="text-xm font-extrabold list-disc">
            Building the image
            </h2>
            <section className="rounded-md bg-nosferatu-200 py-2 pl-2 text-black">
              <div className="flex">$ docker build -t go-docker-app .</div>
            </section>
            <h2 className="text-xm font-extrabold list-disc">
            Running the image
            </h2>
            <section className="rounded-md bg-nosferatu-200 py-2 pl-2 text-black">
              <div className="flex">$ docker run -d -p 8080:8080 go-docker-app</div>
            </section>
            <h2 className="text-xm font-extrabold list-disc">
            Interact with container
            </h2>
            <section className="rounded-md bg-nosferatu-200 py-2 pl-2 text-black">
              <div className="flex">$&nbsp;&nbsp;<div className="text-red">curl</div>&nbsp;http://localhost:8080/hello?name=Furkan</div>
              <div className="flex">&nbsp;Greetings Furkan</div>
            </section>
            <h2 className="text-xm font-extrabold list-disc">
            Stop the container
            </h2>
            <section className="rounded-md bg-nosferatu-200 py-2 pl-2 text-black">
              <div className="flex">$ docker container stop id</div>
            </section>
            <div>Github repo: <Link className="underline" href="https://github.com/devfurkankizmaz/go-docker">go-docker</Link></div>
          </div>
          <div className="flex flex-col min-h-screen text-xl items-center"></div>
          
        </div>
      </Layout>
    </>
  );
}
