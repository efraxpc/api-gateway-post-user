# API Gateway

The API Gateway service acts as a single entry point for client requests, aggregating data from multiple microservices and providing additional features like caching and rate limiting.

## Features

- **Data Aggregation**: Combines responses from Post and User microservices
- **Rate Limiting**: 100 requests per minute per client
- **Response Caching**: 5-minute cache to reduce load on downstream services
- **Error Handling**: Graceful error responses for failed requests

## Dependencies

- **express**: Web framework for Node.js
- **axios**: HTTP client for making requests to microservices
- **apicache**: Middleware for caching API responses
- **express-rate-limit**: Rate limiting middleware

## Configuration

- **Port**: 3007
- **Cache Duration**: 5 minutes
- **Rate Limit**: 100 requests per minute

## API Endpoints

### GET /users/:id

Fetches aggregated user and post data.

**Parameters:**
- `id` (path parameter): GitHub username

**Response:**
```json
{
  "data": {
    "id": "username",
    "followers_url": "...",
    "following_url": "...",
    "subscriptions_url": "...",
    "repos_url": "...",
    "post": {
      "userId": 1,
      "id": 1,
      "title": "...",
      "body": "..."
    }
  },
  "location": "User location"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Bad request"
}
```

## Running the Service

### With Docker

```bash
docker build -t api-gateway .
docker run -p 3007:3007 api-gateway
```

### Locally

```bash
npm install
npm run dev
```

## Environment

The service expects the following microservices to be available:
- Post Microservice: `http://post-microservice:3005` (Docker) or `http://localhost:3005` (local)
- User Microservice: `http://user-microservice:3006` (Docker) or `http://localhost:3006` (local)

## Development

Use nodemon for development with hot reloading:

```bash
npm run dev
```

## Author

Efrain Guerrero
