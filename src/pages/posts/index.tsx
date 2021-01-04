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
const targetPath = join(process.cwd(), "src/pages/posts");

export const getStaticProps: GetStaticProps = async ({}) => {
  const entries = fs.readdirSync(targetPath);
  const paths = entries.filter((v) => {
    return !v.match(/(\.md$|\.mdx$|\.tsx$|\.ts$)/);
  });
  const test = paths.map((v) => {
    return fs.readFileSync(`${targetPath}/${v}/index.tsx`, "utf-8");
  });
  return {
    props: { posts: test },
  };
};

export default PostIndexList;
