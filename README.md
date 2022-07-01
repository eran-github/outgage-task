
This project contains Angular 12 as client and NodeJS with NestJS framework as a server
# pre requisite
* nodejs and angular install on your computer

# server
In order to start the the server:
1. Go the the server folder
2. Run `npm install`
3. Run `npm run build`
4. Run `npm run start`
5. Server URL is: http://localhost:3000/

# client
1. Go the the client folder
2. Run `npm install`
3. Run `ng build`
4. Run `ng serve`
5. Client URL is: http://localhost:4200/

* DB (json) files located on server/db folder
* Example for campaign id: ABC
* Example for contact id: KLM
* Visit URL stracture: http://localhost:4200/campaign/CAMPAIGN-ID/CONTACT-ID
* When campaign or contact does note exists we display blank page
* After both client and server are up and running we can test the application by open browser with:
1. Exists campaign - page visit:
 http://localhost:4200/campaign/ABC/KLM
2. Not exists campaign - page visit:
http://localhost:4200/campaign/ABC/KLM1
3. After pressing on sign me up button, a new form will be display
4. Stats page (table with sorting):
http://localhost:4200/stats