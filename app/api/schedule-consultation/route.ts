export async function POST(request: Request) {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const availability = formData.get("availability");
    const focus = formData.get("focus");

    // const "frc-captcha-response": captchaResponse,
    // };

    console.log("Form submission:", data);
    return new Response("Form submitted", { status: 200 });
}
