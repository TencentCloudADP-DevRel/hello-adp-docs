import { redirect } from 'next/navigation';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // 直接重定向到对应语言的文档页面
  redirect(`/${lang}/docs`);
}