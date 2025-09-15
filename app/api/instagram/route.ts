import { NextResponse } from 'next/server';

export async function GET() {
  // 1) Préférence: Graph API (compte pro lié à page) avec IG_GRAPH_TOKEN + IG_IG_USER_ID
  const graphToken = process.env.IG_GRAPH_TOKEN;
  const igUserId = process.env.IG_IG_USER_ID;
  if (graphToken && igUserId) {
    try {
      const url = `https://graph.facebook.com/v18.0/${igUserId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${graphToken}&limit=9`;
      const res = await fetch(url, { next: { revalidate: 300 } });
      if (res.ok) {
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
      }
    } catch {}
  }

  // 2) Fallback: Basic Display (si configuré et encore accessible)
  const basicToken = process.env.IG_BASIC_TOKEN;
  if (basicToken) {
    try {
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${basicToken}&limit=9`;
      const res = await fetch(url, { next: { revalidate: 300 } });
      if (res.ok) {
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
      }
    } catch {}
  }

  return NextResponse.json({ items: [] }, { status: 200 });
}


