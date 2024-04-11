import { Resend } from "resend";
import Message from "@/emails/Message";
import Response from "@/emails/Response";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  try {
    resend.emails.send({
      from: "order@annapurna-tiffins.com",
      to: body?.email,
      subject: "Thank you for contacting us",
      react: Message({ name: body?.name || null }),
    });
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "order@annapurna-tiffins.com",
      subject: "You received a new message from your website",
      react: Response({ ...body }),
    });
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
