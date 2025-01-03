document.getElementById('addNote').addEventListener('click', function () {
    const noteText = document.getElementById('noteText').value.trim();
    if (noteText === "") {
        alert("Please write something before adding a note.");
        return;
    }

    const notesList = document.getElementById('notesList');

    
    const note = document.createElement('div');
    note.className = 'note';

   
    const noteContent = document.createElement('p');
    noteContent.textContent = noteText;
    note.appendChild(noteContent);

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function () {
        notesList.removeChild(note);
    });
    note.appendChild(deleteButton);

    
    notesList.appendChild(note);

    
    document.getElementById('noteText').value = "";
});
