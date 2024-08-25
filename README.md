# NodeNotesApp

Basic Node application used within the terminal for creating and managing notes as a json file.

Once within the directory containing 'app.js', there are 4 different commands you can call

Adding a new note:

  node app.js add --title="Title" --body="Body"

  Adds a new note to the 'notes.json' file. 
  The title is required and must be unique.
  If there is no body an empty body will be created.

Removing an existing note:

  node app.js remove --title="Title"

  Removes an existing note from the 'notes.json' file.
  The title must be an exact match.

Listing all the notes:

  node app.js list

  Lists all the titles that exist in the 'notes.json' file.

Reading a specific note:

  node app.js read --title="Title"

  Displays the title and body of the note if a matching title is found
