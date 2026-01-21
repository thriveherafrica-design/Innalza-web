export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    // If spam bot fills the hidden field, ignore silently
    if (data.botField && String(data.botField).trim() !== "") {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { "Content-Type": "application/json" },
        status: 200
      });
    }

    // basic validation
    if (!data.email || !data.message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing email or message." }), {
        headers: { "Content-Type": "application/json" },
        status: 400
      });
    }

    // For now: store in logs (we’ll connect email next)
    console.log("New contact message:", {
      name: data.name,
      company: data.company,
      email: data.email,
      message: data.message
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "Invalid request body." }), {
      headers: { "Content-Type": "application/json" },
      status: 400
    });
  }
}
