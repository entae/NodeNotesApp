const chalk = require('chalk'); // customizes text display in terminal
const yargs = require('yargs'); // parses arguments from process.args
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
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

// Create remove command
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

// Create list command
yargs.command ({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command ({
    command: 'read',
    describe: 'Read a note',
    handler(argv) {
        console.log(argv)
    }
})

// parses command and displays to terminal
yargs.parse();