export async function handler() {
  try {
    const res = await fetch(
      'https://www.aa.com.tr/tr/rss/default?cat=guncel',
      { headers: { 'User-Agent': 'KindleRSS/1.0' } }
    );

    const text = await res.text();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'max-age=900' // 15 dk cache (Kindle için iyi)
      },
      body: text
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: 'RSS alınamadı'
    };
  }
}
