# ThePickupList
An awesome shopping list app using the MERN (MongoDB/Express/React/Node) Stack, plus probably some Socket.IO.

# Setup for development

## Prereqs
- Make sure node is up to date.  4.7+ should be fine.
- Install webpack and webpack-dev-server globally
```
  npm install -g webpack
  npm install -g webpack-dev-server
```
  
## Run dev environment
- Run
```
  npm install
```
- API startup: In one command window run:
```
  node index.js
```
- Client-side: In another command window run:
```
  webpack-dev-server -d
```
- Site should be available at [http://localhost:8080](http://localhost:8080)
