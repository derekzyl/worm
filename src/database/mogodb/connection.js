const { MongoClient } = require("mongodb");

export async function connect(url, extraSettings, dbName) {
  try {
    const db = new MongoClient(url, extraSettings);
    await db.connect();
    const database = db.db(dbName);
    return database;
  } catch (e) {
    return e;
  }
}

async function table(tableName, dataSchema) {
  const db = new MongoClient(url, extraSettings);
  await db.connect();
  const database = db.db(dbName);
  const newTable = database.collection(tableName);

  function find(data, cbFn) {
    return newTable.find(data, cbFn);
  }

  function findOne(params) {
    const dataValidated = dataSchema.validator(data);
    return newTable.findOne(dataValidated);
  }

  async function findOneAndDelete(params, cbFn) {
    return newTable.findOne(params, cbFn);
  }
  async function aggregate(data) {
    return newTable.aggregate(data);
  }

  // newTable.bsonOptions;

  async function bulkWrite(data) {
    return newTable.bulkWrite(data);
  }
  async function deleteMany(data, options, cbFn) {
    return newTable.deleteMany(data, options, cbFn);
  }
  async function deleteOne(data, options, cbFn) {
    return newTable.deleteOne(data, options, cbFn);
  }
  async function distinct(data) {
    return newTable.distinct(data, query, options, cbFn);
  }
  async function drop(data, cbFn) {
    return newTable.drop(data, cbFn);
  }
  async function dropIndex(data, option, cbFn) {
    return newTable.dropIndex(data, option, cbFn);
  }
  async function dropIndexes(data, cbFn) {
    return newTable.indexes(data, cbFn);
  }
  async function estimatedDocumentCount(data, cbFn) {
    return newTable.estimatedDocumentCount(data, cbFn);
  }
  async function find(data) {
    return newTable.find(data);
  }
  async function findOne(data, option, cbFn) {
    return newTable.findOne(data, option, cbFn);
  }

  async function findOneAndDelete(data, option, cbFn) {
    return newTable.findOneAndDelete(data, option, cbFn);
  }
  async function findOneAndReplace(data, replacement, option, cbFn) {
    return newTable.findOneAndReplace(data, replacement, option, cbFn);
  }
  async function findOneAndUpdate(filter, update, option, cbFn) {
    return newTable.findOneAndUpdate(filter, update, option, cbFn);
  }
  async function getLogger() {
    return newTable.getLogger();
  }
  async function indexExists(index, option, cbFn) {
    return newTable.indexExists(index, option, cbFn);
  }
  async function indexInformation(data, option, cbFn) {
    return newTable.indexInformation(data, cbFn);
  }

  async function initializeOrderedBulkOp(option) {
    return newTable.initializeOrderedBulkOp(option);
  }
  async function insertMany(data, option, cbFn) {
    return newTable.insertMany(data, option, cbFn);
  }
  async function insertOne(data, option, cbFn) {
    return newTable.insertOne(data, option, cbFn);
  }
  async function isCapped(option, cbFn) {
    return newTable.isCapped(option, cbFn);
  }
  async function listIndexes(option) {
    return newTable.listIndexes(option);
  }
  async function mapReduce(map, rdFn, cbFn) {
    return newTable.mapReduce(map, rdFn, cbFn);
  }
  async function namespace() {
    return newTable.namespace;
  }
  async function options(option, cbFn) {
    return newTable.options(option, cbFn);
  }
  async function rename(newName, option, cbFn) {
    return newTable.rename(newName, option, cbFn);
  }
  async function replaceOne(filter, replacement, option, cbFn) {
    return newTable.replaceOne(filter, replacement, option, cbFn);
  }
  async function updateMany(filter, update, option, cbFn) {
    return newTable.updateMany(filter, update, option, cbFn);
  }
  async function watch(pipeline, option) {
    return newTable.watch(pipeline, option);
  }
  async function writeConcern() {
    return newTable.writeConcern;
  }
  async function readConcern() {
    return newTable.readConcern;
  }
}
