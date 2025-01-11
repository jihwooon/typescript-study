'use client'

import { ReactNode } from "react";
import style from './post.module.css';
import {useRouter} from "next/navigation";

type Props = {
    children: ReactNode;
    post: {
        postId: number;
        User: {
            id: string,
            nickname: string,
            image: string,
        },
        content: string,
        createdAt: Date,
        Images: any[]
    }
}

const PostArticle = ({ children, post }: Props) => {
    const router = useRouter();
  return (
    <article className={ style.post } onClick={() => {
       router.push(`/${post.User.id}/status/${post.postId}`)
    }}>{ children }
    </article>
  );
};

export default PostArticle;
