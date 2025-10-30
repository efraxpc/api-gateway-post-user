# API Gateway with Microservices

A microservices architecture project demonstrating an API Gateway pattern with two backend microservices for fetching user and post data.

## Architecture

This project consists of three services:

- **API Gateway** (Port 3007): Main entry point that aggregates data from microservices
- **Post Microservice** (Port 3005): Fetches post data from JSONPlaceholder API
- **User Microservice** (Port 3006): Fetches user data from GitHub API

## Features

- **API Gateway Pattern**: Single entry point for client requests
- **Data Aggregation**: Combines user and post data in a single response
- **Rate Limiting**: 100 requests per minute to prevent abuse
- **Caching**: 5-minute cache for improved performance
- **Docker Support**: Fully containerized with Docker Compose

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- npm or yarn

## Getting Started

### Using Docker Compose (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd api-gateway-post-user
```

2. Start all services:
```bash
docker-compose up --build
```

3. The services will be available at:
   - API Gateway: http://localhost:3007
   - Post Microservice: http://localhost:3005
   - User Microservice: http://localhost:3006

### Manual Setup

If you prefer to run services individually:

1. Install dependencies for each service:
```bash
cd api-gateway && npm install
cd ../post-microservice && npm install
cd ../user-microservice && npm install
```

2. Start each service in separate terminals:
```bash
# Terminal 1
cd post-microservice && npm run dev

# Terminal 2
cd user-microservice && npm run dev

# Terminal 3
cd api-gateway && npm run dev
```

## API Endpoints

### API Gateway

**GET** `/users/:id`

Fetches aggregated user and post data.

**Example Request:**
```bash
curl http://localhost:3007/users/octocat
```

**Example Response:**
```json
{
  "data": {
    "id": "octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "post": {
      "userId": 1,
      "id": 1,
      "title": "...",
      "body": "..."
    }
  },
  "location": "San Francisco"
}
```

### Post Microservice

**GET** `/posts/:id`

Fetches a post by ID from JSONPlaceholder.

**Example:**
```bash
curl http://localhost:3005/posts/1
```

### User Microservice

**GET** `/users/:id`

Fetches a GitHub user by username.

**Example:**
```bash
curl http://localhost:3006/users/octocat
```

## Project Structure

```
api-gateway-post-user/
├── api-gateway/          # API Gateway service
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
├── post-microservice/    # Post microservice
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
├── user-microservice/    # User microservice
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
├── docker-compose.yml    # Docker Compose configuration
└── README.md            # This file
```

## Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **Axios**: HTTP client
- **apicache**: Response caching middleware
- **express-rate-limit**: Rate limiting middleware
- **Docker**: Containerization
- **Docker Compose**: Multi-container orchestration

## Development

Each service can be developed independently. Use `npm run dev` to start with nodemon for hot reloading.

## Author

Efrain Guerrero

## License

ISC
