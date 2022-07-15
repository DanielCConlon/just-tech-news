async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const resposne = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  if (resposne.ok) {
    document.location.replace('/dashboard');
  }
  else {
    alert(resposne.statusText);
  }

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
