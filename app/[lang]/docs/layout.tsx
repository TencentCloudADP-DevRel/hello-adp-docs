import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { i18n } from '@/lib/i18n';
import type { ReactNode } from 'react';

// 生成静态参数，用于静态导出
export function generateStaticParams() {
  return i18n.languages.map((lang) => ({
    lang,
  }));
}

export default async function Layout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // 使用await解构params
  const resolvedParams = await params;
  const { lang } = resolvedParams;
  
  // 根据当前语言获取页面树
  const pageTree = source.pageTree[lang] || source.pageTree.en;

  return (
    <DocsLayout 
      {...baseOptions(lang)} 
      tree={pageTree}
    >
      {children}
    </DocsLayout>
  );
} 