import { NextResponse } from "next/server";
const hookUrl =
  "https://gamechanger.bitrix24.kz/rest/1026/31wjxzxvswwv7nvz/crm.deal.add.json";

export async function POST(req) {
  const data = await req.json();

  try {
    const res = await fetch(hookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const answer = await res.json();

    return NextResponse.json(answer);
  } catch (error) {
    console.log(error, "Ошибка при создании сделки");
    
  }
}