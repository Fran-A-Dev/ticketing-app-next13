async function getPost(id) {
  const query = `
      query GetPostById($id: ID!) {
          post(id: $id, idType: DATABASE_ID) {
            title
            content
            id
          }
        }
    `;

  const variables = {
    id,
  };

  const res = await fetch("https://smartcahce.wpengine.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }), // Include the variables here
  });

  const { data } = await res.json();

  return data.post; // Correct the way you return the post object
}

export default async function PostDetails({ params }) {
  const post = await getPost(params.id);

  return (
    <main>
      <nav>
        <h1>{post.title}</h1>
      </nav>
      <div className="card" key={post.id}>
        <p dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </main>
  );
}
