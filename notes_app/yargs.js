const yargs = require('yargs')

//customize yargs version
yargs.version('1.1.0')

//creating add, remove, list, read commands
//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler: function(argv) {
         console.log('Title: ' + argv.title)
         console.log('Body: ' + argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note!')
    }
})

// challenge of creating list and read
//create list command 
yargs.command({
    command: 'list',
    describe: 'Listing your note',
    handler: function() {
        console.log('Listing a note!')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Reading your note',
    handler: function() {
        console.log('Reading a note')
    }
})

yargs.parse()
// console.log(yargs.argv)
