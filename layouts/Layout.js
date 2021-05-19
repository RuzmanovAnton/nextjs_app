import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = null }) {
  return (
    <>
      <Head>
        <title>React SSR {title && `| ${title}`}</title>
      </Head>
      <div>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/posts"}>
          <a>Posts</a>
        </Link>
        <Link href={"/posts-ssr"}>
          <a>Posts SSR</a>
        </Link>
      </div>
      <div>{children}</div>
    </>
  );
}
