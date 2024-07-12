"use server";

import { MoneyPaymentRequest } from "../models/MoneyPayment";
import { PrivateMEssagetRequest } from "../models/PrivateMessage";
import { ServiceRequest } from "../models/ServiceReq";
import { WaitList } from "../models/WaitList";
import dbConnect from "./db";

import { sendMail } from "./mail";
import { SendContactEmail } from "./schema";

export async function whiteList(formData: FormData) {
  const email = formData.get("email");

  try {
    await dbConnect();

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

export const requestServoce = async (e: FormData) => {
  const data = Object.fromEntries(e);

  try {
    console.log("send service request to servicer");

    await dbConnect();

    const newSerice = new ServiceRequest({
      serviceType: data.serviceType,
      serviceUserRequest: data.serviceUserRequest,
      username: data.username,
      useremail: data.email,
    });

    await newSerice.save();

    return {
      status: "success",
      payload: "",
    };
  } catch (error) {
    console.log(error);
  }
};

export const SendExpressPayment = async (e: FormData) => {
  const data = Object.fromEntries(e);
  try {
    // connecting to  the db
    await dbConnect();
    // create a money order
    const newOrder = new MoneyPaymentRequest({
      MoneyPaymentID: data.transactoinId,
      MetaAddress: data.metaAddress,
    });
    await newOrder.save();
    // send money order

    // record money order

    return {
      status: "success",
      payload: newOrder,
    };
  } catch (error) {
    console.log("error", error);
  }
};

export const SendPM = async (e: FormData) => {
  const data = Object.fromEntries(e);
  const contentMessage = data.message as string
  try {
    console.log("conntectingto email")
    await dbConnect()

    console.log("send email")

    const payload = JSON.stringify({subject: data.title,
      from: "nameenornaddres",
      MetaAddress: data.address,
      content: data.message})

    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: "qano",
      subject: data.title as string,
      content: contentMessage.concat(payload),
    });
    console.log("send data to server")
    const newPM = new PrivateMEssagetRequest({
      subject: data.title,
      from: "nameenornaddres",
      MetaAddress: data.address,
      content: contentMessage,
    });
    console.log("save data created by user client")
    await newPM.save();

    console.log("sending user data to client")
    return {
      status: "success",
      payload: data.message as string,
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
};
