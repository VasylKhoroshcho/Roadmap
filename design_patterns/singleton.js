
class Database {
  constructor() {
    if (Database.instance instanceof Database) {
   	 return Database.instance;
    }
    this.connectionURL = {
      name: "",
      options: {}
    }

    Database.instance = this;
 }


    connect(uri, options) {
        this.connectionURL.name = name;
        this.connectionURL.options = options;
        console.log(`DB: ${uri} connected!`);
    }

    disconnect() {
      console.log(`${this.connectionURL.name} is disconnected!`);
    }
}

const db = new Database()

const db1 = new Database()

console.log(db === db1)
// true
