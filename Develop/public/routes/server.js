const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

const uniqueId = uuidv4();
console.log(uniqueId)

app.use(express.static('public')); //middleware for the public folder
app.use(express.json()); //middleware for JSON



app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
  });

app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a review`)
    const dbFilePath = path.join(__dirname, '../../db/db.json')
    fs.readFile(dbFilePath, 'utf8', (err, data) =>{
        if (err) {
            console.error('Error reading the file:', err);
            return res.status(500).json({ error: 'Failed to read notes from database' });    
        }
    res.status(200).json(JSON.parse(data));

    })
})


app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a review`)
    const dbFilePath = path.join(__dirname, '../../db/db.json')
    fs.readFile(dbFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return res.status(500).json({ error: 'Failed to read notes from database'})
        }

        let notes = JSON.parse(data)

        const newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text
        };

        notes.push(newNote);

        fs.writeFile(dbFilePath, JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                return res.status(500).json({ error: 'Failed to save the new note'})
            }
        })

        res.status(200).json(JSON.parse(data));
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });


app.delete('/api/notes/:id', (req, res) => {
    const dbFilePath = path.join(__dirname, '../../db/db.json')
    const noteId = req.params.id;

    fs.readFile(dbFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return res.status(500).json({ error: 'Failed to read notes from Database'});
        }
    
        let notes = JSON.parse(data);

        const updatedNotes = notes.filter(note => note.id !== noteId);

        fs.writeFile(dbFilePath, JSON.stringify(updatedNotes, null, 2), (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                return res.status(500).json({error: 'Failed to delete the note'})
            }
        res.status(200).json({ message: 'Note deleted succesfully'})
        })
    })
})  


app.listen(PORT, () => {
    console.log('Server is running on PORT 3001')
})
