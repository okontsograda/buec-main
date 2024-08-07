
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  const formData = await req.formData();
  const image = formData.get("file")
  const fileName = formData.get("name")
  console.log(fileName)

  if (!image) return NextResponse.json( { error: "No file received" }, { status: 400});

  // const imageName = image.name.replaceAll(" ", "_");
  // console.log(imageName)
  try {

    return NextResponse.json({ success: true, secure_url: data.secure_url });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

