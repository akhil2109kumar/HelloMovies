# Hello Movies Project

This Project named "Hello Movies" allows users to search for their favorite movies and view them in a user-friendly interface.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/akhil2109kumar/HelloMovies.git
    cd HelloMovies
    ```

2. Create a `.env` file from the `example_env` file:

    ```bash
    cp example_env .env
    ```

    Modify the `.env` file with your configuration settings.

3. Run the following Docker Compose command to build and start the containers:

    ```bash
    docker compose up --build
    ```

    This command will start the backend Django server on port 8000 and the frontend React server on port 3000.

## Accessing the Application

- Backend API: [http://localhost:8000/api/](http://localhost:8000/api/)
- Frontend Interface: [http://localhost:3000/](http://localhost:3000/)


## Technologies Used

- Django
- Django REST Framework
- React
- Docker
- PostgreSQL