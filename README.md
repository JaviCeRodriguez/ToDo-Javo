# ToDo-Javo

## Sobre el proyecto
Este repo fue hecho para los siguientes artículos hechos en DEV.to:
- [Firebase CRUD con JS y HTML: Form y Create](https://dev.to/javicerodriguez/firebase-crud-con-js-y-html-form-y-create-3oe7)
- [Firebase CRUD con JS y HTML: Read, Update y Delete](https://dev.to/javicerodriguez/firebase-crud-con-js-y-html-read-update-y-delete-15no)
- [Firebase CRUD con JS y HTML: Deploy](https://dev.to/javicerodriguez/firebase-crud-con-js-y-html-deploy-4ba6)

## A tener en cuenta
Para el proyecto, no utilizo variables de entorno. Se optó por crear un archivo de configuración `firebase_config.js` en la carpeta `./public/js`.
El contenido de dicho script, es de este tipo:

```js
var firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

Reemplazar con los valores correspondientes dados por el SDK de Firebase.