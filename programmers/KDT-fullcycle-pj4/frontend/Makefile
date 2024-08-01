ARCH=amd64
IMG_TAG="sheayun/notes-fe:latest"

all: node image push

node:
	npm install
	npm run build

test:
	npm i c8
	npm ci
	./node_modules/.bin/c8 -r html -o coverage --all npm test -- --watchAll=false

run:
	npm start

image: Dockerfile node
	docker build --platform=linux/${ARCH} --tag ${IMG_TAG} .

push:
	docker push ${IMG_TAG}

deploy: notes-fe.yaml
	kubectl apply -f notes-fe.yaml

undeploy:
	kubectl delete -f notes-fe.yaml

clean: undeploy
	\rm -rf build
	docker rmi ${IMG_TAG}
