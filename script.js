 function newNote() {
            const noteElement = document.createElement('div');
            noteElement.classList.add('col-md-3', 'col-sm-6', 'col-10', 'mb-3');

            noteElement.innerHTML = `
                <div class="card shadow">
                    <div class="card-header d-flex justify-content-between">
                        <span class="note-title">Note Title</span>
                        <button type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                    <div class="card-body">
                        <p class="note-body">Note Body</p>
                    </div>
                </div>
            `;

            document.getElementById('notes').appendChild(noteElement);

            // Title Editing
            const cardHeader = noteElement.querySelector('.note-title');
            cardHeader.addEventListener('dblclick', function () {
                this.setAttribute('contenteditable', true);
                this.focus();
            });
            cardHeader.addEventListener('blur', function () {
                this.removeAttribute('contenteditable');
            });
            cardHeader.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    this.removeAttribute('contenteditable');
                    this.blur();
                }
            });

            // Body Editing
            const cardBody = noteElement.querySelector('.note-body');
            cardBody.addEventListener('dblclick', function () {
                this.setAttribute('contenteditable', true);
                this.focus();
            });
            cardBody.addEventListener('blur', function () {
                this.removeAttribute('contenteditable');
            });

            // Delete Note
            const closeButton = noteElement.querySelector('.btn-close');
            closeButton.addEventListener('click', function () {
                noteElement.remove();
            });
        }