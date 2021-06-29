fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    let html = json.map((user) => {
      return `
        <div class="card">
          <div>
            <h2 id="names">${user.name}</h2>
          </div>

          <div class="container" id="email">
            <h4>${user.email}</h4>
          </div>

          <div>
            <button class="btn button button1">
              <a href="posts.html?userId=${user.id}">POSTS</a>
              </button>
              </div>
            </div>
          `;
        });
        document.querySelector("#userdata").innerHTML = html;
      });