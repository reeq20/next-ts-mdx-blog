import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { join } from "path";
import glob from "glob";
import fs, { readFileSync } from "fs";
import matter from "gray-matter";
interface Props {
  posts: any;
}

const PostIndexList: NextPage<Props> = (props) => {
  console.log(props);
  return <>test</>;
};
const targetPath = join(process.cwd(), "src/pages/posts/a");

export const getStaticProps: GetStaticProps = async ({}) => {
  const entries = glob.sync(`${targetPath}/**/*.mdx`);
  const posts = entries.map((v) => {
    const paths = v
      .split(targetPath)
      .pop()
      .replace(/(\.mdx$)/, "");
    const fileData = fs.readFileSync(v, "utf-8");
    const { data } = matter(fileData);
    return {
      meta: data,
      path: `/posts/a${paths}`,
    };
  });

  return {
    props: { posts: posts },
  };
};

export default PostIndexList;
