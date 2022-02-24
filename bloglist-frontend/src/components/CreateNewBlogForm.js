import React from 'react'
import blogService from '../services/blogs'

const CreateNewBlogForm = ({
  title, setTitle, author, setAuthor, url, setUrl, blogs, setBlogs
}) => {
  const resetFormInputs = () => {
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  const createBlogPost = async (event) => {
    event.preventDefault()
    const blogObject = {
      title: title,
      author: author,
      url: url,
      likes: 0
    }

    const newBlog = await blogService.create(blogObject)
    setBlogs(blogs.concat(newBlog))
    resetFormInputs();
  }


  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createBlogPost}>
        <div>
          Title:
          <input
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)} />
        </div>
        <div>
          Author:
          <input
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)} />
        </div>
        <div>
          Url:
          <input
            type="text"
            value={url}
            name="Url"
            onChange={({ target }) => setUrl(target.value)} />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default CreateNewBlogForm