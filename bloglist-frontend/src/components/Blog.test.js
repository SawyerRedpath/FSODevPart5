import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders title, author, nothing more', () => {
  const blog = {
    title: 'title should show',
    author: 'author should show',
    url: 'url should not show',
    likes: 0
  }

  render(<Blog blog={blog} />)

  const title = screen.queryByText('title should show')
  const author = screen.queryByText('author should show')
  const url = screen.queryByText('url shuold not show')
  const likes = screen.queryByText('0')

  expect(title).toBeDefined
  expect(author).toBeDefined
  expect(url).toBeNull
  expect(likes).toBeNull
})