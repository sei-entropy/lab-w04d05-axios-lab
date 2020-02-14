
///////////////////      Using Vue        /////////////////////
new Vue({
    el: '#app',
    data() {
      return {
        searchTerm: '',
        searchResults: [],
      }
    },

    //Create axios 
    methods: {
      search() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + this.searchTerm)
        // ==> Sucss
        .then(response => {
          this.searchResults = response.data
        })
        // ==> Error
        .catch(err => {
          console.log(err)
        })
      },

      // Create function book authors
      bookAuthors(book) {
        let authors = book.volumeInfo.authors;
        
        // if statment
        if (authors.length < 3) {
          //Return array as string
          authors = authors.join(' and ')
        }else 
        
        // if statment
        if (authors.length > 2) {
          // Returns the selected elements in array
          let lastAuthor = ' and ' + authors.slice(-1);

          authors.pop() 
          authors = authors.join(', ')
          authors += lastAuthor
        }
        return authors
      }
    }
  });