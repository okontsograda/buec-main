// pages/api/events.js
import { connectToDatabase } from '../../utils/db';
import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request) {
  try {
    const client = await connectToDatabase();
    const db = client.db("buec");
    const eventCollection = db.collection('sundaySchoolReg24');
    const events = await eventCollection.find().toArray();
    console.log('here...')
    return NextResponse.json({ events });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching events', error });
  }
}