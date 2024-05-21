import React from "react";
import CommentForm from "./CommentForm";
import SignleComment from "./SingleComment";
import ReplyComment from "./ReplyComment";

const PostComments = ({ post }) => {
  return (
    <div>
      <h2>نظرات</h2>
      {post.comments.map((comment, index) => {
        return (
          !comment.responseTo &&
          comment.status == 2 && (
            <React.Fragment key={comment._id}>
              <SignleComment comment={comment} postId={post._id} />
              <ReplyComment
                comments={post.comments}
                parentCommentId={comment._id}
                postId={post._id}
              />
            </React.Fragment>
          )
        );
      })}
      {/*base comment  */}
      <div className="mt-8">
        <span className="font-bold md:text-lg">ارسال دیدگاه جدید</span>
        <CommentForm postId={post._id} responseTo={null} />
      </div>
    </div>
  );
};

export default PostComments;
