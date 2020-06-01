const yargs = require('yargs')

const noteFunction = require('./note_function')

console.log("WELCOME TO THE NOTE APP\nYOU CAN ADD, READ, LIST OR REMOVE NOTES\n")
console.log("\nPlease use the commands => add, read, list, updateTitle, updateBody or remove to use this app\n\n")


yargs.command({
    command: 'add',
    decribe: 'Add a note using a title and a body',
    builder: {
        title: {
            describe: 'This is the title of the note',
            demandOption: true,
            type: String
        },
        body: {
            describe: 'body of the note to be added',
            demandOption: true,
            type: String
        }
    },
    handler: function (argv) {
        console.log("Adding a note.", argv.title)
        noteFunction.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read a note by the title',
            demandOption: true,
            type:String
        }
    },
    handler: function(argv) {
        console.log("Reading a note ", argv.title)
        noteFunction.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all the notes you have created',
    handler: function (argv) {
        console.log("Listing notes...")
        noteFunction.listNote()
    }
})

yargs.command({
    command: 'updateTitle',
    describe: 'Update existing notes by title',
    builder: {
        old_title: {
            describe: ' The title by whcih the note to be updated would be identified',
            demandOption: true,
            type: String
        },
        new_title: {
            describe: "The new title you want to update with",
            demandOption: true,
            type: String
        }
    },
    handler: function(argv) {
        console.log("Updating note title...")
        noteFunction.updateNoteTitle(argv.old_title, argv.new_title)
    }
})

yargs.command({
    command: 'updateBody',
    describe: 'Update existing notes by body',
    builder: {
        title: {
            describe: ' The title by whcih the note to be updated would be identified',
            demandOption: true,
            type: String
        },
        new_body: {
            describe: "The new body you want to update with",
            demandOption: true,
            type: String
        }
    },
    handler: function(argv) {
        console.log("Updating note body...")
        noteFunction.updateNoteBody(argv.title, argv.new_body)
    }
})


yargs.command({
    command: 'remove',
    describe: 'Remove a note by using the title',
    builder: {
        title: {
            describe: "The title of the note you want to remove",
            demandOption: true,
            type: String
        }
    },
    handler: function(argv) {
        console.log("Removing a note", argv.title)
        noteFunction.removeNote(argv.title)
    }
})




yargs.parse()