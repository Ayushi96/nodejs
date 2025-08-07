const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { json } = require("stream/consumers");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  /**
   * Ideally data se related sara kaam should happen inside model, and hence rather than keeping the logic to push the data directly from the controller we will provide that functionality here inside the model.
   */
  save() {
    const homeDatePath = path.join(rootDir, "data", "homes.json");
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      fs.writeFile(homeDatePath, JSON.stringify(registeredHomes), (error) => {
        console.log("Error in saving file : ", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDatePath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDatePath, (err, data) => {
      callback(err ? [] : JSON.parse(data));
    });
  }
};
