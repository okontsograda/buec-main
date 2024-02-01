// pages/api/events.js
import { connectToDatabase } from '../../util/db';
import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request) {
  try {
    const client = await connectToDatabase();
    const db = client.db("buec-calendar");
    const eventCollection = db.collection('main-events');
    const events = await eventCollection.find().toArray();
    return NextResponse.json({ events });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching events', error });
  }
}

// Handles POST requests to /api
export async function POST(request) {
  // ...
  return NextResponse.json({ message: "Hello World" });
}