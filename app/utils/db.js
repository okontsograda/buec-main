import { MongoClient, ObjectId } from 'mongodb';

const uri = 'mongodb+srv://buecadmin:buecLiv3@buec.kzvfikj.mongodb.net/?retryWrites=true&w=majority';

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri);

  cachedClient = client;
  return client;
}

export function ObjectID() {
  return Object
}