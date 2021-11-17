# asset_tracker
Webapp to keep track of your assets!

# run webapp
## .env
Create your own secure configuration by using the sample:
``` bash
mv .env.sample .env
```

## docker-compose
Launch the webapp with docker-compose:
``` bash
docker-compose up
```

# run development environment
## .env
In the folder `backend/` and `frontend/` copy the `.env.sample` file to `.env` and fill in the correct values:
``` bash
mv db/.env.sample db/.env
mv backend/.env.sample backend/.env
mv frontend/.env.sample frontend/.env
```

## db
Start a local Postgres-Database via docker-compose.
``` bash
cd db/
docker-compose up
```

## backend
Start the NestJS-Application by running the following commands:
``` bash
cd backend/
npm install
npm run start:dev
```

## frontend
Lastly, launch the Angular-App through this commands:
``` bash
cd frontend/
npm install
ng serve
```

# documentation
## modules
The application is divided in four parts. Each part is seperated in one module in the backend and also in the frontend.

### dashtory
*Dashboard and History*