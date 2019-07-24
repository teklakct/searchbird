# searchbird
Application that gets GIF and Images from multiple data sources

## Installation

* Clone this repository: 
```bash
$ git clone https://github.com/teklakct/searchbird.git
```
* Change directory to project root 
```bash
$ cd searchbird
```
* Install dependencies 
```bash
$ npm install
```

### Parameters file

In order to retrieve data from sources, You need to obtain your 
secret API key from [Giphy](https://developers.giphy.com/docs) and [Pixabay](https://pixabay.com/api/docs/).

Next open file `dotenv` and follow the instructions.

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
$ npm start
```
It will run application in development mode, run web server at 
[http://localhost:8080/](http://localhost:8080)

> **NOTE**
> This option requires a web server to be running. See "Running server"

## Building the app
```bash
$ npm run build
```
It will build application and copy all files to `/dist`

### Running web server

```bash
$ npm run server
```
It will run web server at [http://localhost:3000/](http://localhost:3000)

## Testing

#### Unit Tests

There is small amount of unit test. You can simply run through 
```bash
$ npm test 
```