import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Posts() {
  const [posts, setPosts] = useLocalStorage("posts", []);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [selectedPost, setSelectedPost] = useState(null);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [query, setQuery] = useState("");

  const addPost = () => {
    if (!newPost.title.trim() || !newPost.body.trim()) return;
    
    const post = {
      id: Date.now(),
      title: newPost.title,
      body: newPost.body,
      date: new Date().toLocaleDateString()
    };
    
    setPosts([post, ...posts]);
    setNewPost({ title: "", body: "" });
    setIsAddingPost(false);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.body.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <Card className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 border border-blue-200 dark:border-slate-700 shadow-md rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
            My Posts
          </h2>
          <Button onClick={() => setIsAddingPost(true)}>Add New Post</Button>
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="w-full p-2 rounded-lg border border-blue-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 mb-5"
        />

        {filtered.length === 0 ? (
          <div className="text-gray-500 text-center italic">No posts found. Add your first post!</div>
        ) : (
          filtered.map((p) => (
            <article
              key={p.id}
              className="group mb-3 p-4 border border-blue-100 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-700"
            >
              <div 
                className="flex justify-between items-start mb-2"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="font-semibold text-blue-800 dark:text-blue-400">
                  {p.title}
                </h3>
                <Button 
                  onClick={() => deletePost(p.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                >
                  Delete
                </Button>
              </div>
              <div onClick={() => setSelectedPost(p)} className="cursor-pointer">
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{p.body}</p>
                <div className="text-gray-400 dark:text-gray-500 text-xs mt-2">{p.date}</div>
              </div>
            </article>
          ))
        )}

        {(selectedPost || isAddingPost) && (
          <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              {isAddingPost ? (
                <>
                  <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">Create New Post</h2>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Post title..."
                    className="w-full p-2 rounded-lg border border-blue-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                  />
                  <textarea
                    value={newPost.body}
                    onChange={(e) => setNewPost(prev => ({ ...prev, body: e.target.value }))}
                    placeholder="Write your post content..."
                    rows={6}
                    className="w-full p-2 rounded-lg border border-blue-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
                  />
                  <div className="flex gap-3">
                    <Button onClick={addPost}>Save Post</Button>
                    <Button onClick={() => {
                      setIsAddingPost(false);
                      setNewPost({ title: "", body: "" });
                    }}>Cancel</Button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">{selectedPost.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-wrap">{selectedPost.body}</p>
                  <div className="text-gray-400 dark:text-gray-500 text-sm mb-4">{selectedPost.date}</div>
                  <Button onClick={() => setSelectedPost(null)}>Close</Button>
                </>
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

