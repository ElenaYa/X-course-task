// Load and parse books.json
fetch('books.json')
  .then(response => response.json())
  .then(data => {
      // Build list in HTML
      data.forEach(item => {
          let imageUrl = item.image;
          let title = item.title;
          let author = item.author;
          let price = item.price;
        
          let galleryItem = document.createElement('li');
          galleryItem.classList.add('gallery-item');
        
          let image = document.createElement('img');
          image.classList.add('img-book');
          image.src = imageUrl;
          galleryItem.appendChild(image);
        
          let caption = document.createElement('p');
          caption.classList.add('title-book');
          caption.textContent = title;
          galleryItem.appendChild(caption);

          let text = document.createElement('p');
          text.classList.add('author');
          text.textContent = author;
          galleryItem.appendChild(text);

          let cost = document.createElement('p');
          cost.classList.add('price');
          cost.textContent = "$ " + price;
          galleryItem.appendChild(cost);

          let button = document.createElement('button');
          button.classList.add('button');
          button.textContent = "View";
          galleryItem.appendChild(button);
        
          document.querySelector('.gallery').appendChild(galleryItem);
      });

      // Search functionality
      const searchInput = document.querySelector('#search');
      searchInput.addEventListener('input', function() {
          let searchQuery = this.value.toLowerCase();

          document.querySelectorAll('.title-book').forEach(item => {
              let title = item.textContent.toLowerCase();

              if (title.includes(searchQuery)) {
                  item.parentElement.style.display = 'block';
              } else {
                  item.parentElement.style.display = 'none';
              }
          });
      });

      console.log(data);
  })
  .catch(error => console.error('Error loading books.json', error));
