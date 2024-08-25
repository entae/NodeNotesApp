const chalk = require('chalk'); // customizes text display in terminal
const yargs = require('yargs'); // parses arguments from process.args
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// add command
// call: node app.js add --title="title" --body="body"
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// remove command
// call: node app.js remove --title="title"
yargs.command ({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// list command
// call: node app.js list
yargs.command ({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

// read command
// call: node app.js read --title-"title"
yargs.command ({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// parses command and displays to terminal
yargs.parse();