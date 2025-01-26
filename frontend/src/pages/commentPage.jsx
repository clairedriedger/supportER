import React, { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CommentPage = () => {
    const { threadId } = useParams();
    const [thread, setThread] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [userId, setUserId] = useState("JaneBroken");

    // Fetch thread and comments
    useEffect(() => {
        const fetchThreadAndComments = async () => {
            try {
                const threadResponse = await axios.get(`http://localhost:3001/api/threads/${threadId}`);
                const commentsResponse = await axios.get(`http://localhost:3001/api/comments/${threadId}/comments`);

                setThread(threadResponse.data.thread);
                setComments(commentsResponse.data.comments);
            }   catch (error) {
                console.error("Failed to fetch thread or comments: ", error);  
            }
        };


        fetchThreadAndComments();
    },  [threadId]);


    // add a new comments
    const handleAddComment = async () => {
        if (!newComment.trim()) return;
        
        try {
            const response = await axios.post(`http://localhost:3001/api/comments/${threadId}/addComment`, {
              content: newComment,
              userId,
            });

            setComments((prev) => [response.data.comment, ...prev]); // Add new comment to the list
            setNewComment("");
        } catch (error) {
          console.error("Failed to add comment:", error);
        }
    };

    return (
        <div className="p-6">
          {/* Thread Information */}
          {thread && (
            <div className="mb-6 border-b pb-4">
              <h1 className="text-2xl font-bold">{thread.title}</h1>
              <p className="text-gray-600">{thread.content}</p>
              <p className="text-sm text-gray-500">Posted by: {thread.user?.username || "Anonymous"}</p>
              <p className="text-sm text-gray-500">Created at: {new Date(thread.createdAt).toLocaleString()}</p>
            </div>
          )}
    
          {/* Comments Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            {comments.map((comment) => (
              <div key={comment._id} className="border-b py-4">
                <p className="text-gray-800">
                  <strong>{comment.user?.username || "Anonymous"}</strong>: {comment.content}
                </p>
                <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
    
          {/* New Comment Form */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">Add a Comment</h2>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment..."
              className="w-full p-2 border rounded mb-2"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      );
    };
    
export default CommentPage 
