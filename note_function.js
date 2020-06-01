const fs = require('fs')

const addNote = function(title, body) {

    const addFunction = loadNote()

    const dupl = duplicateNote(addFunction, title)

    if (dupl.length === 0) {
        addFunction.push({
            title: title,
            body: body
        })
    } else {
        console.log("Duplicate exists!")
    }

    saveNote(addFunction)
    

}

const readNote = function(title) {

    const readN = loadNote()

    const findN =  readN.find(function (readn) {
        return readn.title === title
    })

    if (findN) {
        console.log("\nTitle: "+ findN.title)
        console.log("Body: "+findN.body)
    } else {
        console.log("Invalid operation")
    }

}

const listNote = function() {

    const listN = loadNote()

    listN.forEach(function(listn) {
        console.log("\nTitle: "+listn.title)
        console.log("\nBody: "+listn.body+"\n")
    })

}

const updateNoteTitle = function (title, new_title) {

    const updateN = loadNote()
    const findUpdate = updateN.find(function(updaten) {
        return updaten.title === title
    })

    if (findUpdate) {
        findUpdate.title = new_title
        const dup = keepNote(updateN, title)
        dup.push({
            title: findUpdate.title,
            body: findUpdate.body
        })
        saveNote(dup)
    } else {
        console.log("Invalid Operation")
    }
}

const updateNoteBody = function (title, new_body) {

    const updateN = loadNote()
    const findUpdate = updateN.find(function(updaten) {
        return updaten.title === title
    })

    if (findUpdate) {
        findUpdate.body = new_body
        const dup = keepNote(updateN, title)
        dup.push({
            title: findUpdate.title,
            body: findUpdate.body
        })
        saveNote(dup)
    } else {
        console.log("Invalid Operation")
    }
}

const removeNote = function(title) {

    const loadF = loadNote()

    if (loadF.length === 0 ) {
        console.log("Invalid Operation")
    }

    const keptN = keepNote(loadF, title)
    saveNote(keptN)

}

const loadNote =  function () { 
    try {
        const noteJSON = fs.readFileSync('note.json')
        const noteBuffer = noteJSON.toString()
        noted = JSON.parse(noteBuffer)
        return noted
    } catch (e) {
        return []
    }

}

const duplicateNote = function (notes, title) {
    const duplicates = notes.filter(function(note) {
        return note.title === title;
    });

    return duplicates;

}


const keepNote = function (noteKeep, title) {

    const keepN = noteKeep.filter(function(noteK) {
        return noteK.title !== title
    })
    return keepN
}

const saveNote = function(recieveNote) {

    const saveNoteJSON = JSON.stringify(recieveNote)
    fs.writeFileSync('note.json', saveNoteJSON)

}

module.exports = {

    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNote: listNote,
    updateNoteTitle: updateNoteTitle,
    updateNoteBody:updateNoteBody

}