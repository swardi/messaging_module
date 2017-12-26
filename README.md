# Sample Authentication application for i2x.

## Running the application locally

1) Install yarn https://yarnpkg.com/en/docs/install
2) Clone this repository
3) Run yarn install
4) Run yarn relay and then yarn start

5) Go to the server folder, run npm install
6) Run node index.js to run server.
7) In browser go to http://localhost:8080/


## Deployment instructions
1) Go to your project and run following command

yarn build

2) Copy the content of your dist folder in your favorite http server

3) Copy the index.js from server folder in node server and change the url in enironment.js according to your new address and port. Run the server and try accessing application from browser.


## Components list

1) App
2) Notes
3) Note
4) NoteControl
5) NoteInput

