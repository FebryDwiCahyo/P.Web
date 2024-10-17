// Mengambil elemen input dan list dari HTML
const textInput = document.getElementById('taskinput'); 
const textList = document.getElementById('task-list'); 


function addTask() {
    const textValue = textInput.value.trim();
    if (textValue === '') {
        alert('Silakan isi tugas!');
        return;
    }

    // Membuat elemen list baru
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="task-item">${textValue}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Hapus</button>
    `;
    textList.appendChild(listItem); // Menambahkan item baru ke dalam daftar
    textInput.value = ''; // Mengosongkan input setelah menambahkan
}

// Fungsi untuk mengedit tugas dari daftar
function editTask(editButton) {
    const listItem = editButton.parentElement; // Mendapatkan elemen induk dari tombol
    const taskText = listItem.querySelector('.task-item'); // Menggunakan kelas yang benar

    // Ubah teks tugas menjadi input text untuk diedit
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.value = taskText.textContent;
    taskInput.classList.add('task-edit-input');

    // Ganti teks tugas dengan input yang bisa diedit
    listItem.replaceChild(taskInput, taskText);

    // Ganti tombol "Edit" menjadi tombol "Simpan"
    editButton.textContent = 'Simpan';
    editButton.setAttribute('onclick', 'saveTask(this)');
}

// Fungsi untuk menyimpan tugas yang telah diedit
function saveTask(saveButton) {
    const listItem = saveButton.parentElement; // Mendapatkan elemen induk dari tombol
    const taskInput = listItem.querySelector('.task-edit-input'); // Menggunakan kelas yang benar

    // Buat kembali elemen teks tugas yang sudah diedit
    const taskText = document.createElement('span');
    taskText.classList.add('task-item');
    taskText.textContent = taskInput.value;

    // Ganti input dengan teks tugas yang baru
    listItem.replaceChild(taskText, taskInput);

    // Ganti tombol "Simpan" kembali menjadi tombol "Edit"
    saveButton.textContent = 'Edit';
    saveButton.setAttribute('onclick', 'editTask(this)');
}

// Fungsi untuk menghapus tugas dari daftar
function deleteTask(deleteButton) {
    const listItem = deleteButton.parentElement; // Mendapatkan elemen induk dari tombol
    textList.removeChild(listItem); // Menghapus item dari daftar
}
