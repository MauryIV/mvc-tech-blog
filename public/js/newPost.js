const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();
  const content = document.querySelector('#blog-content').value.trim();

  if (title && description && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, description, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
