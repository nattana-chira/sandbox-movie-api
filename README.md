# Getting Started

A sandbox project that clone Netflix homepage using **NestJs** as backend API.  
Live demo: [https://sandbox-movie-api.onrender.com/movies](https://sandbox-movie-api.onrender.com/movies)  
  
** Sometimes, **Movie API is shut down due to inactivity**.  
** If webpage take too long to response, **wait for a minute and try refresh the page** again.

## 📦 Installation

First, copy .env file:
```bash
cp .env.example .env
```

Then install dependenceis:
```bash
npm install
```

Finally, run the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

If you wanna compile and run the project in Production:

```bash
$ npm run build
$ npm run start:prod
```

Open [http://localhost:5000/movies](http://localhost:5000/movies) with your browser to see the result.  

## 🛠️ Tech Stack
  
- **TypeScript**  
- **NestJs**   
- **Axios**  
- **Clean Architecture**  
  
## 🚀 Features

- Movie API (get popular movies, get movie details)  
  
## 📁 Project Structure
```bash
project/
├── src/                                 # Source code
│   ├── libs/                            
│   │   └── error-handler.ts             # NextJS global error handler
│   ├── modules/                         # Group feature module by functionality
│   │   └── common                       # For code logic shared across all modules
│   │   │   └── ...                      
│   │   └── movie                        # All code related to Movie module
│   │       ├── application/             # Application layer contain movie use cases and how they are handled
│   │       │   └── movie.use-case.ts    
│   │       ├── domain/                  # Domain layer contain movie related entities and interface for movie use cases
│   │       │   ├── entity/
│   │       │   └── movie.repository.ts    
│   │       ├── infrastructure/          # Infrastructure layer implment domain interface and act like a service to perform anything outside the app (API calls etc.)
│   │       │   ├── movie-api-service.ts
│   │       │   └── ...    
│   │       ├── presentation/            # Presentation layer is any entry points controller or route
│   │       │   └── move.controller.ts
│   │       └── movie.module.ts          # Handle dependency injections
│   ├── app.module.ts                    # NestJS main module
│   ├── config.ts                        # Constant variable (env)
│   └── main.ts                          # App boostraper
├── .env.example                         # Example of .env file
...
```
