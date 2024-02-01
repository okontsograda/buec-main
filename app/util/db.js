import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://buec-admin:Liv3123@buec-calendar.q2glhxq.mongodb.net/?retryWrites=true&w=majority';

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri);

  cachedClient = client;
  return client;
}
