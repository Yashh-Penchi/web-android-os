  const notesInput = document.getElementById("notesInput");
  const saveNoteBtn = document.getElementById("saveNoteBtn");
  const notesList = document.getElementById("notesList");

  const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem("myNotes")) || [];
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${note} <button onclick="deleteNote(${index})">✖</button>`;
      notesList.appendChild(li);
    });
  };

  saveNoteBtn.addEventListener("click", () => {
    const noteText = notesInput.value.trim();
    if (noteText) {
      const notes = JSON.parse(localStorage.getItem("myNotes")) || [];
      notes.push(noteText);
      localStorage.setItem("myNotes", JSON.stringify(notes));
      notesInput.value = "";
      loadNotes();
    }
  });


  window.deleteNote = (index) => {
    const notes = JSON.parse(localStorage.getItem("myNotes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("myNotes", JSON.stringify(notes));
    loadNotes();
  };

  loadNotes();
