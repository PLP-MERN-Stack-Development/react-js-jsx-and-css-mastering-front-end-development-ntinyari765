export async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Failed to fetch posts')
  const data = await res.json()
  
  // Filter and clean up posts to ensure English content
  return data
    .filter(post => {
      // Only keep posts with proper English characters and structure
      const hasProperTitle = /^[A-Za-z].*[.!?]$/.test(post.title);
      const hasEnoughWords = post.title.split(' ').length >= 3;
      return hasProperTitle && hasEnoughWords;
    })
    .map(post => {
      // Clean up and format the content
      return {
        ...post,
        title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
        body: post.body.charAt(0).toUpperCase() + post.body.slice(1)
      };
    })
    .slice(0, 20); // Limit to 20 posts for better performance
}
