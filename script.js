function submitQuiz() {
    let score = 0;
    const answers = {
        q1: 'Paris',
        q2: 'Mars',
        q3: 'Blue Whale'
    };

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    document.getElementById('result').innerText = `Your Score: ${score}`;
}
