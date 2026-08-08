export async function GET(request: Request) {
  const startedAt = Date.now()
  const requestId = request.headers.get("x-vercel-id")

  console.log(
    JSON.stringify({
      level: "info",
      message: "Request started",
      method: "GET",
      route: "/api/hello",
      requestId
    })
  )

  try {
    const response = new Response("Hello, from API!")

    console.log(
      JSON.stringify({
        level: "info",
        message: "Request completed",
        method: "GET",
        route: "/api/hello",
        requestId,
        status: response.status,
        durationMs: Date.now() - startedAt
      })
    )

    return response
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        message: "Request failed",
        method: "GET",
        route: "/api/hello",
        requestId,
        error: error instanceof Error ? error.message : String(error),
        durationMs: Date.now() - startedAt
      })
    )

    return new Response("Internal Server Error", { status: 500 })
  }
}
