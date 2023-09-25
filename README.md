# Amphi

#### By: Sam Bassong

###  [Porfolio](https://www.sambassong.com/) | [LinkedIn](https://www.linkedin.com/in/sambassong/) | [GitHub](https://github.com/sbassong) 

***

### ***Description***
####  [Amphi](https://amphi.herokuapp.com/) is an events search application and database built on the MERN stack (MongoDB/Express/React/Node.js). I built this light application to learn the various pieces of the stack. First full-stack app!
***

### ***Technologies Used***

- [MongoDB](https://www.mongodb.com/) - Document-oriented database
- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [React](https://reactjs.org/) - (Best) Frontend JS library
- [Node.js](https://nodejs.org/en/) - JS runtime
- [Heroku](https://www.heroku.com/home) - Deployment host
- [React-icons](https://react-icons.github.io/react-icons/) - library of react icons

***

## **_Local Environment Requirements_**
Node, npm, and MongoDB are necessary to run this application. If needed, please follow the installation guidelines in the  **[Env-requirements section](#env-requirements)** section.

## **_Getting Started_**
 Once the requirements are met, we're ready to run the application. Follow the steps below to set up and launch the application server.

Copy this repo's HTTPS URL and clone it onto your local machine's terminal:
  ```sh 
  git clone https://github.com/sbassong/amphi.git
  ```

  #### *From here you will need to have 2 terminals open to run both the frontend and backend*
  ### A. Client / React app / Frontend
  1. Change directory into the newly cloned folder's client folder then install dependencies
      ```sh 
      cd amphi/client
      npm install
      ```
  1. Run the app on port 3000 
      ```sh 
      npm start
      ```

  ### B. Server + Database / Express app / MongoDB / Backend
  1. Change directory into the newly cloned folder then install dependencies
      ```sh 
      cd amphi
      npm install
      ```
  1.  (optional) Seed the artists and event data 
        ```sh 
        npm run seed
        ```
  1.  Run the server
      ```sh 
      npm run dev
      ```
***

### ***Credits***
#### inspiration: Ticketmaster/ticketweb
#### Pictures: [DuckDuckGoSearch](https://duckduckgo.com)
#### artist description: [Wikipedia](https://www.wikipedia.org/)
#### icons: [React-icons](https://react-icons.github.io/react-icons/)
#### random data: [Faker API](https://www.npmjs.com/package/faker)


# Env Requirements
  Node, npm, and MongoDb are necessary to run this application. please follow the installation guidelines below:

 <details><summary><h3>Node and npm</h3></summary>

* *Recommended*: Go to the Node Version Manager ([NVM](https://github.com/nvm-sh/nvm)) github and follow the instructions to install both both Node and npm
* *Alternatively*: Go to [Node.js](https://nodejs.org/en/) and use the installer appropriate for your system to install node and npm

    *Verify that both node and npm have been installed by running the following in your CLI*

        node -v
        npm -v
</details>

 <details><summary><h3>MongoDB</h3></summary>

* Head to the official [MongoDB documentation](https://www.mongodb.com/docs/) as needed, choose your operating system family and follow your preferred installation route
* My preferred installation method for Linux/MacOS:

    1. install homebrew by running this command in your termninal

            /bin/bash -c "$(curl -fsSL https://raw githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    2. follow this each of the following line **one by one**

            brew tap mongodb/brew

            brew tap | grep mongodb
       
            brew install mongodb/brew/mongodb-community

        To start Mongo and keep it running on your machine

            brew services start mongodb/brew/mongodb-community

        To open the mongo shell, run

            mongosh
 
        The CLI should throw a few lines, then prompt with `test>`
 
        Create your first database with
 
           use <nameOfMyFirstDatabase>

        Exit the shell with:

           exit

     Check out [MongoDB docs](https://www.mongodb.com/docs/mongodb-shell/run-commands/) for database operations and more 
</details>

