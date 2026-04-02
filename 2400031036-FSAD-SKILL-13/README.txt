
SKILL 13 – Full Stack Deployment (Spring Boot + React)

1. Run Backend
cd backend
mvn clean package
java -jar target/deployapp-1.0.0.jar

Test API:
http://localhost:8080/api/message

2. Build React
cd frontend
npm install
npm run build

3. Deploy React inside Spring Boot
Copy contents of:
frontend/build/

Into:
backend/src/main/resources/static/

Rebuild backend:
mvn clean package

Run again:
java -jar target/deployapp-1.0.0.jar

Open:
http://localhost:8080
