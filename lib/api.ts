const BASE = "https://acharyaprashant.org/api/v2/uni";

export async function fetchCategories() {
  const res = await fetch(`${BASE}/category`, {
    cache: "force-cache",
  });
  return res.json();
}

export async function fetchVideos(params: {
  language: number;
  orderBy: number;
  category?: number;
  year?: number;
}) {
  const query = new URLSearchParams({
    limit: "50",
    offset: "0",
    language: String(params.language),
    orderBy: String(params.orderBy),
    ...(params.category && { category: String(params.category) }),
    ...(params.year && { year: String(params.year) }),
  });

  const res = await fetch(`${BASE}/yt?${query}`, {
    cache: "no-store",
  });

  return res.json();
}
