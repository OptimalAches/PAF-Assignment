export async function fetchCategories() {
  const res = await fetch(
    "https://acharyaprashant.org/api/v2/uni/category",
    { cache: "force-cache" }
  );

  if (!res.ok) {
    console.error("Category API error", res.status);
    return [];
  }

  const json = await res.json();

  return Array.isArray(json?.categories) ? json.categories : [];
}





export async function fetchVideos({
  language,
  categoryId,
  orderBy,
  year,
}: {
  language: number | null;
  categoryId: string | null;
  orderBy: number;
  year: number | null;
}) {
  const params = new URLSearchParams({
    limit: "50",
    offset: "0",
    orderBy: String(orderBy),
  });

  if (year !== null) {
    params.append("publishedAtYear", String(year));
  }

  if (language === 1 || language === 2) {
    params.append("language", String(language));
  }

  if (typeof categoryId === "string" && categoryId.length > 0) {
    params.append("categoryId", categoryId);
  }

  console.log("YT API:", params.toString());

  const res = await fetch(
    `https://acharyaprashant.org/api/v2/uni/yt?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("YT API error", res.status);
    return [];
  }

  const json = await res.json();
  return Array.isArray(json.data) ? json.data : [];
}