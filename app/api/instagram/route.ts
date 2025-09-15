import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.IG_BASIC_TOKEN;
  if (!token) {
    return NextResponse.json({ items: [] }, { status: 200 });
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}&limit=9`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) {
      return NextResponse.json({ items: [] }, { status: 200 });
    }
    const data = await res.json();
    const items = (data?.data || [])
      .filter((m: any) => m.media_type === 'IMAGE' || m.media_type === 'CAROUSEL_ALBUM' || m.media_type === 'VIDEO')
      .map((m: any) => ({
        id: m.id,
        caption: m.caption || '',
        permalink: m.permalink,
        mediaUrl: m.media_url || m.thumbnail_url,
        mediaType: m.media_type,
        timestamp: m.timestamp,
      }));
    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] }, { status: 200 });
  }
}


