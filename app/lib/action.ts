"use server";

import { WaitList } from "../models/WaitList";
import dbConnect from "./db";
import { sendMail } from "./mail";
import { SendContactEmail } from "./schema";

let db: any | undefined;

async function init() {
  if (db) return;
  try {
    db = await dbConnect();

    console.log(db);
  } catch (error) {
    console.log("Error kill yourself");
  }
}

(async () => {
  await init();
})();

export async function whiteList(formData: FormData) {
  const email = formData.get("email");

  try {
    if (db === undefined) {
      await init();
    }

    const NewMember = new WaitList({
      email: email,
    });

    await NewMember.save();

    return { status: "successfully added" };
  } catch (error) {
    console.log(error);
    return {
      status: "Seems like theres an issue trying to add you, contact me...",
    };
  }
}

export async function ContactEmail(
  prevState: string | object | undefined,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  try {
    const validatedFields = SendContactEmail.safeParse(data);

    if (!validatedFields.success) {
      return {
        message: "seemed to have not worked properly, try again.",
      };
    }

    const { to, name, subject, content } = validatedFields.data;

    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: name,
      subject,
      content,
    });

    return {
      message: `${name} your message has been sent, if you cant wait... call`,
    };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}
