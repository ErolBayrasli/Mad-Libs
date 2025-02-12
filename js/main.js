document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('madLibsForm');
    const resultDiv = document.getElementById('madLibResult');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const noun = document.getElementById('noun').value;
        const verb = document.getElementById('verb').value;
        const adjective = document.getElementById('adjective').value;
        const adverb = document.getElementById('adverb').value;

        const story = `One Day At The Boro, there was a ${adjective} named ${noun} ,who loved to ${verb} ${adverb}.`;

        resultDiv.textContent = story;
    });
});