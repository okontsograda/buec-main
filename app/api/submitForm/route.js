// pages/api/events.js
import { connectToDatabase, ObjectID } from '../../utils/db';
import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request) {
  try {
    const client = await connectToDatabase();
    const db = client.db("buec");
    const eventCollection = db.collection('membersQuestion');
    const events = await eventCollection.find().toArray();

    return NextResponse.json({ events });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching events', error });
  }
}

// Handles POST requests to /api
export async function POST(request) {
  try {
    console.log('Here...');
    // Connect to the database
    const client = await connectToDatabase();
    const db = client.db('buec');
    const eventCollection = db.collection('membersQuestion');

    // Extract data from the request body
    const eventData = await request.json();

    // Retrieve IP address
    const forwarded = request.headers.get('x-forwarded-for'); // Adjust for Headers API
    const ip = forwarded ? forwarded.split(',')[0] : request.ip || request.socket.remoteAddress;

    console.log('Event Data:', eventData);
    console.log('Captured IP:', ip);

    // Include IP in the event data
    const eventDataWithIP = { ...eventData, ip };

    // Insert the event data with IP into the collection
    const result = await eventCollection.insertOne(eventDataWithIP);

    // Return a success response
    return NextResponse.json({
      message: 'Event inserted successfully',
      result,
      ip, // Include the captured IP in the response
    });
  } catch (error) {
    console.error('Error:', error);

    // Return an error response if something goes wrong
    return NextResponse.json({ message: 'Error inserting event', error }, { status: 500 });
  }
}

// Handles PUT requests to /api
export async function PUT(request) {

  try {
    // Connect to the database
    const client = await connectToDatabase();
    const db = client.db("buec-calendar");
    const eventCollection = db.collection('main-events');

    // Extract data from the request body
    const eventData = await request.json();

    if (eventData) {
      const filter = { _id: ObjectID(eventData._id) };

      const updateDocument = {
        $set: {
          start: eventData.start,
          end: eventData.end,
          title: eventData.title
        },
      };

      const result = await eventCollection.updateOne(filter, updateDocument);
      return NextResponse.json({ message: 'Event updated successfully', result });

    }

  } catch (error) {
    // Return an error response if something goes wrong
    return NextResponse.json({ message: 'Error updating event ' + error });
  }
}




/* 

Utilities to normalize data

*/

function formatDate(dateString) {
  var date = new Date(dateString);
  var formattedDate = date.toISOString().slice(0, 16); // Get only YYYY-MM-DDTHH:MM
  return formattedDate;
}

