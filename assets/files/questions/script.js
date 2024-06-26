document.getElementById('generate').addEventListener('click', function() {
    const questions = [
        "What is your favorite color and why",
"What is your favorite color and why",
"What hobby do you wish you could start, and what’s stopping you?",
"What is one health or wellness habit that has made a big difference in your life?",
"What is the best piece of advice you've ever received from a colleague or boss?",
"How has technology impacted your daily life the most?",
"Can you share a personal story about a mistake that taught you a valuable lesson?",
"Where do you see yourself in five years, and how do you plan to get there?",
"What book has significantly influenced your life, and why would you recommend it to others?",
"What are you most grateful for today, and why?",
"What is your favorite childhood memory and how has it shaped the person you are today?",
"Share a memorable travel experience. What did it teach you about the world or yourself?",
"What was the last movie you watched and what did you learn from it?",
"What skill have you learned recently and how has it benefited you?",
"If you could meet any historical figure, who would it be and why?",
"What is one goal you hope to achieve by the end of this year?",
"Describe a time when you had to work with a difficult person. How did you handle it?",
"What is the most interesting place you've ever visited?",
"If you could learn any language fluently, which would it be and why?",
"What does success mean to you?",
"How do you handle stress and pressure?",
"What are your strategies for maintaining work-life balance?",
"If you could switch lives with someone for a day, who would it be and why?",
"What’s the most unusual food you’ve ever tried?",
"What’s your favorite way to spend a weekend?",
"How important is social media in your life?",
"What is the best gift you’ve ever given or received?",
"Who in your life has influenced you the most?",
"If you had to teach something, what would you teach?",
"What is something you've always wanted to do but haven't yet? Why?",
"What are the top three qualities that draw you to someone new?",
"If you had an extra hour every day, what would you do with it?",
"How do you like to be recognized for your accomplishments?",
"Describe a project or idea (not necessarily your own) that was implemented primarily because of your efforts.",
"What do you do to stay educated about new trends?",
"Describe your first job. What did you learn from the experience?",
"What's the most recent thing you've done for the first time?",
"How do you react when your beliefs are challenged?",
"Tell us about a time when you had to make a very quick decision.",
"What's something you're looking forward to in the coming months?",
"How do you prioritize your work tasks?",
"What’s the best part of waking up?",
"If you had to delete all but 3 apps from your smartphone, which ones would you keep?",
"What animal best represents you and why?",
"What's something you've learned about yourself this year?",
"How do you motivate yourself when you feel discouraged?",
"What's one thing that can instantly make your day better?",
"Describe a situation where you found yourself outside of your comfort zone.",
"What's the most helpful way for you to get feedback?",
"What are your favorite and least favorite trends currently?",
"What’s something you disagree with about the way you were raised?",
"Describe a habit you'd like to break.",
"Have you ever won an award? What was it for?",
"How do you deal with change?",
"Talk about a time when you had to persuade someone.",
"What is the most significant change you’ve seen in your life?",
"What charity or cause do you believe in most strongly?",
"What’s the most recent lesson you’ve learned?",
"What fiction character do you wish you could meet?",
"What's your favorite family tradition?",
"If you could change one thing about your industry, what would it be?",
"Describe a piece of art (book, painting, film, etc.) that changed your life."

        // Add more questions as needed
    ];
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.getElementById('question').innerText = questions[randomIndex];
});
