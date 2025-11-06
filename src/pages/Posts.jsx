import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { fetchPosts } from "../api/posts";

export default function Posts() {
  const [all, setAll] = useState([]);
  const [visible, setVisible] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchPosts()
      .then((data) => {
        // filter posts with English letters only
        const englishPosts = data.filter((p) => /[a-zA-Z]/.test(p.title));
        setAll(englishPosts);
        setVisible(englishPosts.slice(0, limit));
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setVisible(all.slice(0, page * limit));
  }, [page, all]);

  const filtered = visible.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.body.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <Card className="bg-gradient-to-b from-blue-50 to-white border border-blue-200 shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Explore Latest Posts
        </h2>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="w-full p-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5"
        />

        {error && (
          <div className="text-red-500 font-medium mb-3 text-center">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-blue-500 text-center font-medium">
            Loading posts…
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-gray-500 text-center italic">No posts found.</div>
        ) : (
          filtered.map((p) => (
            <article
              key={p.id}
              className="mb-3 p-4 border border-blue-100 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-semibold text-blue-800 mb-1">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.body}</p>
            </article>
          ))
        )}

        <div className="flex items-center justify-between mt-6">
          <div className="text-blue-700 font-medium">Page {page}</div>
          <div className="flex gap-3">
            <Button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Prev
            </Button>
            <Button
              onClick={() => setPage((p) => p + 1)}
              disabled={page * limit >= all.length}
            >
              Load more
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

