# Chef Tournament API 🏆👨🍳

API RESTful para gestionar torneos de cocina, construida con Node.js, Express y MongoDB. Permite registrar chefs, organizar torneos, gestionar participaciones y consultar rankings.

## Tabla de Contenidos
- [Chef Tournament API 🏆👨🍳](#chef-tournament-api-)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
    - [3. Actualizar Chef](#3-actualizar-chef)
    - [4. Eliminar Chef](#4-eliminar-chef)
  - [Endpoints](#endpoints)
      - [Esta sección documenta los endpoints disponibles para gestionar tournaments.](#esta-sección-documenta-los-endpoints-disponibles-para-gestionar-tournaments)
    - [1. Obtener Todos los Torneos](#1-obtener-todos-los-torneos)
    - [2. Obtener un Torneo por ID](#2-obtener-un-torneo-por-id)
    - [1. Obtener el Ranking de un Torneo](#1-obtener-el-ranking-de-un-torneo)
    - [4. Crear un Torneo](#4-crear-un-torneo)
    - [1.Actualizar un Torneo](#1actualizar-un-torneo)
    - [1.Registrar un Chef en un Torneo](#1registrar-un-chef-en-un-torneo)
    - [1. Registrar el Score de un Chef en un Torneo](#1-registrar-el-score-de-un-chef-en-un-torneo)
    - [1. Eliminar un Torneo](#1-eliminar-un-torneo)

## Requisitos
- **Node.js** v14 o superior
- **npm** o yarn
- **MongoDB** (local o en la nube)
- Postman o similar para probar endpoints


## Instalación

1. **Clonar el repositorio:**

   ```bash o en la terminal ejecuta
   git clone https://github.com/21Esteban/express.git
   cd express

2. **Instalar las dependencias:**

   ```bash
   npm i 

## Configuracion

   copia el archivo .env.template en la raíz del proyecto y crea un nuevo archivo llamado .env , y el contenido del .env.template pegalo en el archivo .env

## Ejecución

Para iniciar el servidor en modo desarrollo (con recarga automática) ejecuta el siguiente comando:

   -- npm run dev

El servidor se ejecutará en http://localhost:4000.


## Uso de la API

A continuación se detallan los endpoints disponibles y cómo utilizarlos:

### 1. Obtener Chefs

- **Endpoint:** `GET http://localhost:4000/api/chef`
- **Descripción:** Devuelve la lista de todos los chefs registrados en la base de datos.
  **Ejemplo de respuesta:**

  ```json
  [
    {
      "_id": "634a9f7f8f1b2c3d4e5f6789",
      "name": "María López",
      "specialty": "Cocina Mediterránea",
      "experienceYears": 5
    },
    {
      "_id": "634a9f7f8f1b2c3d4e5f6790",
      "name": "Carlos Pérez",
      "specialty": "Cocina Mexicana",
      "experienceYears": 8
    }
  ]

### 2. Crear Chef

- **Endpoint:** `POST http://localhost:4000/api/chef`
- **Descripción:** Registra un nuevo chef en el sistema.
- **Body de la solicitud:**
 ```json
{
  "name": "Ana Torres",
  "specialty": "Pastelería",
  "experienceYears": 6
}
```

### 3. Actualizar Chef

- **Endpoint:** `PUT http://localhost:4000/api/chef/:id`
- **Descripción:** Registra un nuevo chef en el sistema.
- **Parámetro URL:** -> id: Identificador del chef a actualizar.
- **Body de la solicitud:**

 ```json
{
  "name": "Ana Torres",
  "specialty": "Pastelería",
  "experienceYears": 7
}
```

### 4. Eliminar Chef

- **Endpoint:** `DELETE http://localhost:4000/api/chef/:id`
- **Descripción:** Registra un nuevo chef en el sistema.
- **Parámetro URL:** -> id: Identificador del chef a actualizar.
- **Body de la solicitud:**

 ```json
{
  "ok": true,
  "message": "Chef deleted"
}
```

---

## Endpoints

#### Esta sección documenta los endpoints disponibles para gestionar tournaments.  

**Base URL:** `http://localhost:4000/api/tournaments`


### 1. Obtener Todos los Torneos

- **Endpoint:** `GET http://localhost:4000/api/tournaments`  
- **Descripción:** Obtiene la lista de todos los torneos registrados.  

**Ejemplo de respuesta:**

```json
{
  "ok": true,
  "data": [
    {
      "_id": "634aa0128f1b2c3d4e5f6792",
      "name": "MasterChef Spring Edition",
      "location": "Cartagena",
      "maxChefs": 10,
      "chefs": []
    },
  ],
  "message": "Tournament list"
}
```

### 2. Obtener un Torneo por ID
- **Método:**  GET
- **Endpoint:** /api/tournaments/:id 
- **Descripción:** Obtiene los detalles de un torneo específico por su ID.
- **Parámetro URL:** -> id: Identificador del torneo.
**Ejemplo de solicitud:**

```bash
Copy
Edit
`GET http://localhost:4000/api/tournaments/634aa0128f1b2c3d4e5f6792`
```

**Ejemplo de respuesta:**

```json
{
  "ok": true,
  "data": {
    "_id": "634aa0128f1b2c3d4e5f6792",
    "name": "MasterChef Spring Edition",
    "location": "Cartagena",
    "maxChefs": 10,
    "chefs": []
  },
  "message": "Tournament founded"
}
```

### 1. Obtener el Ranking de un Torneo
- **Método:** GET
- **Endpoint:** /api/tournaments/:id/ranking
- **Descripción:** Obtiene el ranking de chefs en un torneo, ordenado de mayor a menor puntuación.
- **Parámetro URL:** -> id: Identificador del torneo.
**Ejemplo de solicitud:**

```bash
`GET http://localhost:4000/api/tournaments/634aa0128f1b2c3d4e5f6792/ranking`
```

**Ejemplo de respuesta:**

```json
{
  "ok": true,
  "data": {
    "tournament": "MasterChef Spring Edition",
    "location": "Cartagena",
    "ranking": [
      { "chef": "María López", "score": 95 },
      { "chef": "Carlos Pérez", "score": 90 },
      { "chef": "Ana Torres", "score": 85 }
    ]
  },
  "message": "Ranking"
}
```

### 4. Crear un Torneo
- **Método:** POST
- **Endpoint:** /api/tournaments
- **Descripción:** Crea un nuevo torneo de cocina.
- **Validación:** Se utiliza validateSchema(createTournamentSchema) para validar el body de la solicitud.

**Body de la solicitud:**

```json
{
  "name": "MasterChef Spring Edition",
  "location": "Cartagena",
  "maxChefs": 10
}
```

**Ejemplo de solicitud:**

```bash
`POST http://localhost:4000/api/tournaments`
```

**Ejemplo de respuesta:**


```json
{
  "ok": true,
  "data": {
    "_id": "634aa0128f1b2c3d4e5f6792",
    "name": "MasterChef Spring Edition",
    "location": "Cartagena",
    "maxChefs": 10,
    "chefs": []
  },
  "message": "Tournament created"
}
```

### 1.Actualizar un Torneo

- **Método:** PUT
- **Endpoint:** /api/tournaments/:id
- **Descripción:** Actualiza los detalles de un torneo (nombre, ubicación y cantidad máxima de chefs).
Validación: Se utiliza validateSchema(updateTournamentSchema) para validar el body de la solicitud.
   - **Parámetros:**
 - id: Identificador del torneo.
  
**Body de la solicitud:**

```json
{
  "name": "Updated Tournament Name",
  "location": "Updated Location",
  "maxChefs": 12
}
```

**Ejemplo de solicitud:**

```bash
`PUT http://localhost:4000/api/tournaments/634aa0128f1b2c3d4e5f6792`
```

**Ejemplo de respuesta:**

```json
{
  "ok": true,
  "data": {
    "_id": "634aa0128f1b2c3d4e5f6792",
    "name": "Updated Tournament Name",
    "location": "Updated Location",
    "maxChefs": 12,
    "chefs": []
  },
  "message": "Tournament updated"
}
```

### 1.Registrar un Chef en un Torneo

- **Método:** POST
- **Endpoint:** /api/tournaments/:id/register
- **Descripción:** Inscribe a un chef en un torneo.
   - **Parámetros:** 
      - id: Identificador del torneo.

**Body de la solicitud:**

```json
{
  "chefId": "634a9f7f8f1b2c3d4e5f6791"
}
```

**Ejemplo de solicitud:** 

```bash
`POST http://localhost:4000/api/tournaments/634aa0128f1b2c3d4e5f6792/register`
```

**Ejemplo de respuesta:**

```json
{
  "ok": true,
  "data": {
    "_id": "634aa0128f1b2c3d4e5f6792",
    "name": "MasterChef Spring Edition",
    "location": "Cartagena",
    "maxChefs": 10,
    "chefs": [
      {
        "chefId": "634a9f7f8f1b2c3d4e5f6791",
        "score": null
      }
    ]
  },
  "message": "Chef registered into tournament"
}
```

### 1. Registrar el Score de un Chef en un Torneo

- **Método:**  POST
- **Endpoint:** /api/tournaments/:id/submit
- **Descripción:** Registra la puntuación obtenida por un chef en un torneo.
   - **Parámetros:**
      - id: Identificador del torneo.

**Body de la solicitud:**

```json
{
  "chefId": "634a9f7f8f1b2c3d4e5f6791",
  "score": 85
}
```

**Ejemplo de solicitud:**

```bash
Copy
Edit
`POST http://localhost:4000/api/tournaments/634aa0128f1b2c3d4e5f6792/submit`
```

**Ejemplo de respuesta:**

```json
{
  "ok": true,
  "data": {
    "_id": "634aa0128f1b2c3d4e5f6792",
    "name": "MasterChef Spring Edition",
    "location": "Cartagena",
    "maxChefs": 10,
    "chefs": [
      {
        "chefId": "634a9f7f8f1b2c3d4e5f6791",
        "score": 85
      }
    ]
  },
  "message": "Score updated successfully"
}
```

### 1. Eliminar un Torneo

- **Método:** DELETE
- **Endpoint:** /api/tournaments/:id
- **Descripción:** Elimina un torneo del sistema.
   - **Parámetros:**
      - id: Identificador del torneo.

**Ejemplo de solicitud:**

```bash
Copy
Edit
`DELETE http://localhost:4000/api/tournaments/634aa0128f1b2c3d4e5f6792`
```

**Ejemplo de respuesta:**

```json
Copy
Edit
{
  "ok": true,
  "message": "Tournament deleted"
}
```

