import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import mdx from "@next/mdx"
import { getHighlighter } from 'shiki';


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
    rehypePlugins: [[rehypePrettyCode,({
      theme: "github-dark",
      defaultColor: false,
      getHighlighter: getHighlighter,
    })]],
  },
});

export default withMDX(nextConfig);