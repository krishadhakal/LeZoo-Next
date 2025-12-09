import { serverEnv } from "@/env/server.env";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filterType = searchParams.get("type");
  const page = searchParams.get("page") || "1";
  const perPage = searchParams.get("per_page") || "2";

  const params = new URLSearchParams();
  params.append("page", page);
  params.append("per_page", perPage);
  params.append("sort", "true");

  if (filterType) {
    params.append("type", filterType);
  }

  const url = `${serverEnv.REALMS_API}?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `API error: ${response.status}` },
        { status: response.status }
      );
    }

    const totalPages = response.headers.get("X-WP-TotalPages");
    const data = await response.json();

    return NextResponse.json({
      data,
      totalPages,
    });
  } catch (error) {
    console.error("Failed to fetch realms data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
