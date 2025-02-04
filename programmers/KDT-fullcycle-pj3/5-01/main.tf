terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {
    host = "unix:///Users/jihwooon/.rd/docker.sock"
}

resource "docker_image" "nginx" {
  name         = "nginx:1.27.3"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.image_id
  name = var.container_name
  ports {
    internal = 80
    external = 8000
  }
}
