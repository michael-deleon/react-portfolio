export async function POST(req: Request) {
    console.log("Env Password:", process.env.PASSWORD); // Debugging
  
    const { password } = await req.json();
    console.log("Received Password:", password);
  
    if (password === process.env.PASSWORD) {
      return Response.json({ success: true });
    }
  
    return Response.json({ success: false }, { status: 401 });
  }
  