'use strict'
const { incident } = require('../model');
const Collection = require('../model/lib/Collection');

const modelMap = {
  incident: new Collection(incident)
};

const checkDb = async (req, res, next) => {
  const model = modelMap.incident
  const dbInfo = await model.read()
  console.log(dbInfo)
  console.log("it worked")
  // if(model){
  //   console.log('in the middleware')
  //   next();
  // }
  // else{
  //   next('no model')
  // }

}
module.exports = checkDb