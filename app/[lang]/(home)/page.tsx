import { redirect } from 'next/navigation';
import { i18n } from '@/lib/i18n';

// 生成静态参数，用于静态导出
export function generateStaticParams() {
  return i18n.languages.map((lang) => ({
    lang,
  }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // 直接重定向到对应语言的文档页面
  redirect(`/${lang}/docs`);
}