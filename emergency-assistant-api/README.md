# First Aid and Emergency Assistant Node.js REST API

A Node.js server for the First Aid React app that provides APIs for retrieving first aid instructions and finding nearest hospitals.

## Prerequisites

Before running the server, make sure you have the following prerequisites:

- Node.js installed on your machine
- MongoDB server running
- Google Maps API key

## Getting Started

To get started with the First Aid Node.js server, follow these steps:

1. Set up environment variables:

Create a `.env` file in the project root directory.

Define the following environment variables in the `.env` file:

```
MONGO_DB_SERVER=<URL_of_your_MongoDB_server>
SERVER_URL=<Current_server_URL>
GOOGLE_MAP_API_KEY=<Your_Google_Maps_API_Key>
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm start
```
