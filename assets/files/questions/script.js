document.getElementById('generate').addEventListener('click', function() {
    const questions = [
"Do you think radio is still relevant today? Why?",
"Have you watched traditional TV lately, or is it all streaming now?",
"Do you still listen to the radio in the car, or is it all podcasts?",
"Do you prefer getting news from social media or traditional outlets?",
"How often do you read magazines these days? in paper?",
"Are newspapers still useful, or is everything digital for you now?",
"What’s your favorite part about watching live TV?",
"Do you think print books will always be around? Why?",
"Do you ever miss flipping through a newspaper on Sundays?",
"When was the last time you bought a physical newspaper or magazine?",
"Do you still use a phone, or is it all facebook and whatsapp now?",
"When was the last time you watched the evening news on TV?",
"Do you prefer physical newspaper or  just read it online  Why?",
"How often do you read printed magazines versus online articles?",
"Do you think radio stations will ever disappear?",
"Do you still buy DVDs, or is everything streamed for you now?",
"What’s the last ad you remember seeing on traditional media?",
"Do you still check the weather on TV, or is it all apps now?",
"Do you think printed newspapers will ever make a comeback?",
"Have you ever missed a TV show because it wasn’t on-demand?",
        "When was the last time you saw a movie in a theater instead of at home?"
        
        // Add more questions as needed
    ];
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.getElementById('question').innerText = questions[randomIndex];
});
