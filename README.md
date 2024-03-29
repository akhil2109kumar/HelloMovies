# Hello Movies Project

This Project named "Hello Movies" allows users to search for their favorite movies and view them in a user-friendly interface.

## Setup

#### Please ensure Docker is installed on your system in order to run this project.

1. Istall Docker in your System:

    For Ubuntu `https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04`

    For Windows `https://docs.docker.com/desktop/install/windows-install/`

    For Mac `https://docs.docker.com/desktop/install/mac-install/`


2. Clone the repository:

    ```bash
    git clone https://github.com/akhil2109kumar/HelloMovies.git
    cd HelloMovies
    ```

3. Create a `.env` file from the `example_env` file:

    ```bash
    cp example_env .env
    ```

    Modify the `.env` file with your configuration settings.

4. Run the following Docker Compose command to build and start the containers:

    ```bash
    docker compose up --build
    or
    sudo docker-compose  up --build -d
    ```

    This command will start the backend Django server on port 8000 and the frontend React server on port 3000.

## Note
- For Create Movie data in django admin run `sudo docker exec -it hellomovies_web_1 python manage.py createsuperuser`


## Accessing the Application

- Backend API: [http://localhost:8000/api/](http://localhost:8000/api/)
- Frontend Interface: [http://localhost:3000/](http://localhost:3000/)


## Technologies Used

- Django
- Django REST Framework
- React
- Docker
- PostgreSQL