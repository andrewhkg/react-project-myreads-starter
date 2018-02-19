
# Synopsis
## MyReads Project  
#### Allow to display books in 3 shelves: Currently Reading, Want to read and Read.

## To get started developing right away:

* git clone https://github.com/andrewhkg/react-project-myreads-starter.git
* install all project dependencies with `npm install`
* start the development server with `npm start`

or
## Create React App from scratch

You’ll need to have Node >= 6 on your local development machine (but it’s not required on the server).

```
npm create-react-app MyReads
cd MyReads
npm unstall
npm start
```

### You Can see your app is running: http://localhost:3000/

To have ability save, search books in shelves need to include file _BooksAPI.js_ in folder _src/_

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Licence

MIT
