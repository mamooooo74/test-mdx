import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1 className="py-2 text-3xl font-bold">{props.children}</h1>
    ),
    h2: (props) => (
      <h2 className="mb-4 border-b border-b-gray-200 pb-1 pt-2 text-2xl font-bold">
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="mb-2 py-1 text-xl font-bold">{props.children}</h3>
    ),
    h4: (props) => <h4 className="py-1 text-lg font-bold">{props.children}</h4>,
    table: (props) => (
      <table className="w-full border-collapse">{props.children}</table>
    ),
    th: (props) => (
      <th className="whitespace-nowrap border border-gray-200 bg-gray-100 px-4 py-2">
        {props.children}
      </th>
    ),
    td: (props) => (
      <td className="border border-gray-200 px-4 py-2">{props.children}</td>
    ),
    ul: (props) => (
      <ul
        className="list-inside list-disc">
        {props.children}
      </ul>
    ),
    li: (props) => <li className="pl-2">{props.children}</li>,
    a: (props) => (
      <a
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {props.children}
      </a>
    ),
    pre: (props) => <pre className="bg-slate-800">{props.children}</pre>
  };
}
