import Link from "next/link";
import React from "react";
import { Post } from "../utils/interface";

interface Props {
	post: Post;
}

const PostComponent = ({ post }: Props) => {
	return (
		<div className={cardStyle}>
			<Link href={`/posts/${post?.slug.current}`}>
				<h2>{post.title}</h2>
				<p>{new Date(post.date).toDateString()}</p>
				<p>{post.excerpt}</p>
			</Link>
		</div>
	);
};

export default PostComponent;

const cardStyle = `
  bg-black
  text-white
  p-6
  rounded-lg
  shadow-lg
  hover:bg-gray-900
  transition-all
  duration-300
  transform
  hover:scale-105
  cursor-pointer
`;
