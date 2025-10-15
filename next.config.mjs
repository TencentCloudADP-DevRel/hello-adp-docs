import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// 检测是否为生产构建（静态导出）
const isStaticExport = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  turbopack: false,
  
  // 只在生产环境启用静态导出
  ...(isStaticExport && {
    output: 'export',
    trailingSlash: true,
    basePath: '/hello-adp-docs',
    assetPrefix: '/hello-adp-docs/',
  }),
  
  images: {
    unoptimized: isStaticExport, // 只在静态导出时禁用优化
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
        pathname: '**',
      }
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
};

// 只在非静态导出模式下添加 headers
if (!isStaticExport) {
  config.headers = async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "frame-ancestors 'self' *.tencentcloud.com *.hellodify.com; frame-src 'self' *.tencentcloud.com *.hellodify.com https://giscus.app https://www.youtube.com/embed/ https://*.youtube.com https://*.vercel.app; child-src 'self' *.tencentcloud.com *.hellodify.com https://giscus.app https://www.youtube.com/embed/ https://*.youtube.com https://*.vercel.app; img-src 'self' data: *.tencentcloud.com *.hellodify.com https://avatars.githubusercontent.com https://twimg.com https://pbs.twimg.com https://*.github.io https://*.youtube.com https://*.ytimg.com https://*.vercel.app; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://giscus.app https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://api.github.com https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com;"
        }
      ]
    }
  ];
}

export default withMDX(config);
