# Cloud Run - Acciones de gitHub

Un flujo de trabajo de ejemplo que usa [Acciones de GitHub](https://help.github.com/en/categories/automating-your-workflow-with-github-actions) para implementar una [aplicación Hello World Node.js](index. js) a [Cloud Run (completamente administrado)](https://cloud.google.com/run/).

## Flujo de trabajo

Para los envíos al _default_ branch, `master`, el flujo de trabajo:

1. Verifique que las credenciales de Google Cloud Platform sean correctas.

1. Cree, etiquete y envíe la imagen a Google Container Registry.

    * La imagen se crea con Cloud Build y se envía a Google Container Registry.

    * La imagen está disponible a través de las siguientes etiquetas: `latest` y first 8 of
    el compromiso SHA.

1. Implemente la imagen en [Cloud Run](https://cloud.google.com/run/).

1. Para ver la implementación, vea esta [URL](https://unab-software-engineer-run-5m6n7sjhtq-ue.a.run.app).

## Configuración

1. Cree o reutilice un repositorio de Github para el flujo de trabajo de ejemplo:

  1. [Cree un repositorio](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository).

  1. Muévase a su directorio de repositorio.

  1. Copie el ejemplo en el repositorio:
  
  ```
  cp -r <ruta_a> / github-actions / example-workflows / cloud-run / ./
  ```
  
1. Agregue su ID de proyecto al [secreto del repositorio] [secretos], llamado `RUN_PROJECT`.

1. Actualice `cloud-run.yml` con los siguientes valores:

  * `RUN_REGION`: la región en la que se implementará el recurso.

  * `SERVICE_NAME`: su nombre preferido de su servicio e imagen.

1. [Agregue el siguiente rol a su cuenta de servicio] [roles]:

  * `Cloud Run Admin - roles / run.admin`: permite la creación de nuevos servicios
  * `Viewer - roles / viewer`: permite ver el proyecto (necesario para acceder al almacenamiento)
  * `Cuenta de servicio de Cloud Build - roles / cloudbuild.builds.builder`: permite
    ejecutar y manipular los recursos de Cloud Build y Storage
  * `Usuario de cuenta de servicio - roles / iam.serviceAccountUser`: requisito de actAs

1. Habilite [Cloud Run API and Cloud Build API.](https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com,run.googleapis.com&redirect=https://console.cloud.google.com&_ga=2.248833607.-1346582427.1578963531).

## Ejecutar el flujo de trabajo

1. Agregue y confirme sus cambios:
```
git add.
git commit -m "Configurar el flujo de trabajo de Github"
```

1. Envie a la rama `master`:
```
git push origin master
```

1. Vea el flujo de trabajo seleccionando la pestaña `Actions` en la parte superior de su repositorio.
Luego haga clic en el flujo de trabajo `Construir e implementar en Cloud Run` para ver los detalles.

** Nota **: Si esta es su primera implementación de Cloud Run, su imagen no permitirá
solicitudes no autenticadas. Si se trata de una revisión de servicio, entonces su servicio
persistir en la configuración actual. Obtenga más información sobre [permitir el acceso público](https://cloud.google.com/run/docs/authenticating/public).

[secretos]: https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
[clúster]: https://cloud.google.com/kubernetes-engine/docs/quickstart#create_cluster
[roles]: https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource
