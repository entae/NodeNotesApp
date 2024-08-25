const fs = require('fs')
const chalk = require('chalk');


// Function addNote
// adds a new note 
// title is required, body is not
const addNote = (title, body) => {

    // loads existing notes to see if same title already exists
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    // if the title does not exist, adds the new note 
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        // saves the updated notes list and displays success
        saveNotes(notes);
        console.log(chalk.green.bold.inverse('New Note added!'))

    } else {

        // displays error message if title already exists
        console.log(chalk.red.inverse('Note title taken!') )
    }
}

// function saveNotes
// saves notes to 'notes.json'
const saveNotes = (notes) => {

    // converts notes array into JSON format
    const dataJSON = JSON.stringify(notes)

    // writes the JSON data into 'notes.json'
    fs.writeFileSync('notes.json', dataJSON)
}

// function loadNotes
// loads existing notes from 'notes.json'
const loadNotes = () => {
    try {

        // read the notes from the file
        const dataBuffer = fs.readFileSync('notes.json')

        // converts the data into a string, then parses it as JSON
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {

        // if the file doesn't exist/error, returns an empty array
        return []
    }
}

// function removeNote
// removes a note if title exists
const removeNote = (title) => {

    // load existing notes
    const notes = loadNotes()

    // filter out note with matching title from argument
    const notesToKeep = notes.filter((note) => 
        note.title !== title
    )

    // check if a note was removed
    if (notesToKeep < notes) {

        // saves the updated notes list and display success message
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note removed!"))
        
    } else {
        
        // display error message if note was not found
        console.log(chalk.red.inverse("No note found!"))
    }
}

// function listNotes
// lists all notes 
const listNotes = () => {
    // display header
    console.log(chalk.bgYellowBright.bold('Your Notes:'))
    const notes = loadNotes()

    // print title of each note in 'notes.json'
    notes.forEach((note) => {
        console.log(note.title)
    })
}

// function readNote
// displays body of specific note by the title
const readNote = (title) => {
    
    // load notes and finds one with matching title
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === title)

    // if note that was being matched exists
    if (foundNote) {

        // displays the title and the body of the note
        console.log(chalk.inverse(foundNote.title))
        console.log(foundNote.body)

// Lines 116 - 118 were for practicing debugging
// debugger 
// // chrome://inspect/

    } else {
        // displays error message if note was not found
        console.log(chalk.red.inverse('Note not found!') )
    }
}


// Exports the functions being called in 'app.js'
module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
};