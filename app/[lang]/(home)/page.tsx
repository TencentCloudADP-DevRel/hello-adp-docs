import { redirect } from 'next/navigation';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // 服务器端重定向，用户不会看到任何中间页面
  redirect(`/${lang}/docs`);
}
