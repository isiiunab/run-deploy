.DEFAULT_GOAL := help

export APP_PATH = ${CURDIR}
export BUILD_IMAGE = isiiunab/run-deploy:v1 
export PATH_CONTAINER_REGISTRY = $(APP_PATH)

help:
			@echo "Bienvenido al entorno automatizado local para iniciar utilice: "
			@echo "use los siguientes comandos:"
			@echo "		build: para construir la imagen"
			@echo "		run: para iniciar el servicio en http://localhost:8080"

build:
			docker build -t $(BUILD_IMAGE) $(PATH_CONTAINER_REGISTRY)

run:
			docker run --rm -p 8080:8080  $(BUILD_IMAGE)
