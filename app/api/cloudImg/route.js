
import { NextResponse } from 'next/server';
import { connectToDatabase, ObjectID } from '../../utils/db';

export async function POST(req, res) {
  const formData = await req.formData();
  
  const client = await connectToDatabase();
  const db = client.db("buec");
  const eventCollection = db.collection('buec_expense');

  const expData = {
    expName: formData.get("name"),
    expDate: formData.get("date"),
    expImage: formData.get("image")
  }

  // Insert the eventData into the eventCollection
  const result = await eventCollection.insertOne(expData);
  console.log(result)
  console.log(formData)

  try {

    return NextResponse.json({ success: true, secure_url: data.secure_url });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// Handles GET requests to /api
export async function GET(req) {
  try {
    const client = await connectToDatabase();
    const db = client.db("buec");
    const eventCollection = db.collection('buec_expense');

    const expenses = await eventCollection.find({}).toArray();

    return NextResponse.json({ success: true, data: expenses });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}