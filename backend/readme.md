# Giphy clone

### Documentation 
- https://developers.giphy.com/docs/

### Objective
- Create (somewhat of) a clone of the giphy website !
- Your page should load trending gifs on page load
- Include a search bar to allow a user to search for gifs
- Your page should then load up with the gifs the user searched for
- Don't worry about the other features on the Giphy website (such as navigation, upload / login )

### Tech specs
- Back-end in Node, front-end in React
- Your API calls to the giphy api should happen from Node
- Your front end will make requests to your Node server
- Node server should have serveral API calls,
    - One for trending gifs, one for searching for gifs,
    - As a stretch goal include an API call on your server for the Giphy API Translate endpoint
    - As a stretch goal include an API call on your server for the Giphy Random Image endpoint
- Use a .env file for your API key

### Tips
- When including search terms, pass them as query parameters
- Finish your back end functionality before starting on the front end
- When wiring up your Node controller, test a simple response message before making API calls
    - This ensures your server / routes / functions are properly wired up
- Test in Postman
- Ask for help!
