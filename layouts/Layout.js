import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = null }) {
  return (
    <>
      <Head>
        <title>React SSR {title && `| ${title}`}</title>
      </Head>
      <nav>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/posts"}>
          <a>Posts</a>
        </Link>
        <Link href={"/posts-ssr"}>
          <a>Posts SSR</a>
        </Link>
      </nav>
      <div>{children}</div>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-around;
          font-size: 26px;
          background: #8edcff;
          padding: 30px;
        }
        div {
          font-size: 26px;
        }
      `}</style>
    </>
  );
}
