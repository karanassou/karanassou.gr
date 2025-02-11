import { NextResponse } from "next/server";
import { ioannaEmail } from "@/components/emailcontent";
import { Resend } from "resend";
import { cookies as cookies_next } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const cookies = await cookies_next();
  const timesstr = cookies.get("form")?.value as string;
  const times = parseInt(timesstr);
  let timesadd = times + 1;
  if (times >= 2) {
    return NextResponse.json(
      { message: "Please... Calm down.", success: false },
      { status: 403 }
    );
  }
  if (!timesadd) {
    timesadd = 1;
  }
  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Error sending message", success: false },
      { status: 400 }
    );
  }
  try {
    const { error } = await resend.emails.send({
      from: "karanassou.gr <contact-form@karanassou.gr>",
      to: ["strat.ileris@gmail.com", "info@karanassou.gr"],
      subject: "Νέο μήνυμα",
      
      text: `${name} \n ${email} \n ${message}`,
      html: ioannaEmail(name, email, message),
    });

    if (error) {
      return Response.json({ error, success: false }, { status: 500 });
    }
    cookies.set({
      name: "form",
      value: timesadd.toString(),
      httpOnly: true,
      path: "/",
      maxAge: 10800,
    });
    return NextResponse.json(
      { message: "We've received your message", success: true },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error, success: false }, { status: 500 });
  }
}
