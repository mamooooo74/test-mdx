import remarkGfm from 'remark-gfm';
import mdx from "@next/mdx"


/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
}

const withMDX = mdx({
  options: {
    // remarkとrehypeは指定しなくてよいとドキュメントに指定あり。
    // remarkParse,remarkRehype,rehypeStringifyは指定しなくても大丈夫。
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);