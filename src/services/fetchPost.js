export const fetchAllPosts = async () => {
    const ALLPOSTS = 'https://jsonplaceholder.typicode.com/posts'
    const data = await fetch(ALLPOSTS);
    const result = await data.json();
    return result;
}

export const fetchComments = async (id) => {
    const URL_COMMENT = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    try {
      const data = await fetch(URL_COMMENT);
      const result = await data.json();
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Ocorreu um erro durante a requisição de comentários.');
    }
  }

  
  
  