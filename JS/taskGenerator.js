let btn = document.querySelector('#new-task');
let task = document.querySelector('.task');
let difficulty = document.querySelector('.difficulty');

const tasks = [
  { task: "Compliment a stranger on their outfit or smile.", dif: "easy" },
  { task: "Write a thank-you note to a teacher or mentor.", dif: "easy" },
  { task: "Try painting or drawing a simple scene.", dif: "medium" },
  { task: "Learn the word 'serendipity' and use it in a sentence.", dif: "easy" },
  { task: "Donate $5 to a local food bank.", dif: "easy" },
  { task: "Meditate for 10 minutes focusing on your breath.", dif: "easy" },
  { task: "Call a grandparent and ask about their day.", dif: "easy" },
  { task: "Cook a new recipe for dinner from a different cuisine.", dif: "medium" },
  { task: "Go for a 30-minute walk in a nearby park.", dif: "easy" },
  { task: "Read one chapter of a book you’ve been meaning to start.", dif: "easy" },
  { task: "Pay for the coffee of the person behind you in line.", dif: "easy" },
  { task: "Organize your desk or workspace.", dif: "medium" },
  { task: "Write down three things you're grateful for today.", dif: "easy" },
  { task: "Drink eight glasses of water throughout the day.", dif: "easy" },
  { task: "Do a 30-minute home workout using an online video.", dif: "medium" },
  { task: "Spend 15 minutes sitting in your backyard or a park.", dif: "easy" },
  { task: "Listen to an educational podcast on a topic you’re curious about.", dif: "easy" },
  { task: "Pick up trash in your local park or beach.", dif: "medium" },
  { task: "Watch a YouTube tutorial to learn a new skill.", dif: "medium" },
  { task: "Write a 500-word short story about a day in your life.", dif: "medium" },
  { task: "Volunteer at a local shelter for an hour.", dif: "hard" },
  { task: "Sort through your clothes and donate items you no longer need.", dif: "medium" },
  { task: "Try cooking an authentic Thai dish for dinner.", dif: "medium" },
  { task: "Plant a small herb garden in your kitchen.", dif: "medium" },
  { task: "Unplug from all screens for one hour before bed.", dif: "easy" },
  { task: "Practice deep breathing exercises for five minutes.", dif: "easy" },
  { task: "Look in the mirror and compliment yourself.", dif: "easy" },
  { task: "Watch a documentary on a subject you know little about.", dif: "medium" },
  { task: "Create a simple budget plan for the month.", dif: "medium" },
  { task: "Write a letter to your future self about your goals.", dif: "medium" },
  { task: "Do a 10-minute morning stretch routine.", dif: "easy" },
  { task: "Take a cold shower and note how it makes you feel.", dif: "hard" },
  { task: "Eat your meals without distractions and savor each bite.", dif: "easy" },
  { task: "Create a playlist of your favorite songs and listen to it.", dif: "easy" },
  { task: "Learn the basic steps of salsa dancing.", dif: "medium" },
  { task: "Complete a 500-piece puzzle.", dif: "medium" },
  { task: "Write down your short-term and long-term goals.", dif: "easy" },
  { task: "Compliment a coworker on their hard work.", dif: "easy" },
  { task: "Spend 20 minutes playing with your pet.", dif: "easy" },
  { task: "Read about the traditions of another culture.", dif: "medium" },
  { task: "Create a vision board of your dreams and aspirations.", dif: "medium" },
  { task: "Take a different route home from work or school.", dif: "easy" },
  { task: "Repeat positive affirmations aloud in the morning.", dif: "easy" },
  { task: "Reduce your screen time by one hour today.", dif: "easy" },
  { task: "Bake cookies and share them with your neighbors.", dif: "medium" },
  { task: "Write a poem about your day.", dif: "medium" },
  { task: "Try a new yoga routine focused on relaxation.", dif: "easy" },
  { task: "Clean and organize your desk or workspace.", dif: "medium" },
  { task: "Wake up early to watch the sunrise.", dif: "easy" },
  { task: "Write a to-do list for tomorrow to stay organized.", dif: "easy" },
  { task: "Reach out to a friend you haven’t spoken to in a while.", dif: "easy" },
  { task: "Listen to an audiobook while doing chores.", dif: "easy" },
  { task: "Create a DIY project using materials you have at home.", dif: "medium" },
  { task: "Plan a fun activity with your family.", dif: "medium" },
  { task: "Paint or draw a simple landscape scene.", dif: "medium" },
  { task: "Visit a local museum or art gallery.", dif: "medium" },
  { task: "Reflect on a recent personal accomplishment.", dif: "easy" },
  { task: "Practice sitting up straight and maintaining good posture.", dif: "easy" },
  { task: "Have a no-spend day where you don’t spend any money.", dif: "medium" },
  { task: "Research and write about a historical event you find interesting.", dif: "medium" },
  { task: "Spend 10 minutes writing in a journal about your day.", dif: "easy" },
  { task: "Take a walk in a neighborhood you’ve never explored.", dif: "easy" },
  { task: "Host a virtual game night with friends.", dif: "medium" },
  { task: "Make a list of your strengths and how you can use them.", dif: "easy" },
  { task: "Experiment with a new hairstyle or haircut.", dif: "medium" },
  { task: "Follow a 30-minute yoga video on YouTube.", dif: "easy" },
  { task: "Cook a meal for a friend or family member.", dif: "medium" },
  { task: "Learn how to bake a new type of bread.", dif: "medium" },
  { task: "Do a random act of kindness for a family member.", dif: "easy" },
  { task: "Write down your biggest dreams and goals.", dif: "hard" },
  { task: "Use a language learning app to practice a new language.", dif: "medium" },
  { task: "Take a 20-minute power nap to recharge.", dif: "easy" },
  { task: "Find and memorize a motivational quote.", dif: "easy" },
  { task: "Spend an hour volunteering at a local community center.", dif: "hard" },
  { task: "Research and plan a future vacation.", dif: "medium" },
  { task: "Read an article on a topic you know little about.", dif: "easy" },
  { task: "Spend an afternoon catching up with a close friend.", dif: "easy" },
  { task: "Start a small home improvement project.", dif: "medium" },
  { task: "Reflect on what you’ve learned this week.", dif: "easy" },
  { task: "Try a high-intensity interval training (HIIT) workout.", dif: "hard" },
  { task: "Make a list of things that make you happy and why.", dif: "easy" },
  { task: "Watch a tutorial about a new technology or software.", dif: "medium" },
  { task: "Go for a scenic drive and enjoy the view.", dif: "easy" },
  { task: "Buy a meal for a homeless person in your community.", dif: "medium" },
  { task: "Spend 30 minutes practicing a musical instrument.", dif: "medium" },
  { task: "Attend a virtual seminar or class.", dif: "medium" },
  { task: "Face a small fear or try something outside your comfort zone.", dif: "hard" },
  { task: "Write a heartfelt letter to a loved one.", dif: "medium" },
  { task: "Set up a personal budget tracker.", dif: "medium" },
  { task: "Reflect on how you’ve grown as a person over the last year.", dif: "easy" },
  { task: "Plan a special date night with your significant other.", dif: "medium" },
  { task: "Create and repeat a personal mantra for motivation.", dif: "easy" },
  { task: "Take a photo of something that inspires you.", dif: "easy" },
  { task: "Outline a detailed plan to achieve one of your goals.", dif: "medium" },
  { task: "Spend five minutes thinking about what you’re grateful for.", dif: "easy" },
  { task: "Learn about a scientific topic that interests you.", dif: "medium" },
  { task: "Create a new playlist with songs that motivate you.", dif: "easy" },
  { task: "Spend 10 minutes journaling about your thoughts and feelings.", dif: "easy" },
  { task: "Join a virtual fitness class and try a new workout.", dif: "medium" },
  { task: "Spend an hour doing an activity that you’re passionate about.", dif: "easy" }
];


btn.addEventListener('click',function(){

  let random = Math.floor(Math.random()*tasks.length);
  task.innerText = tasks[random].task;
  let dif=tasks[random].dif;
  difficulty.innerText = dif;
  let difficultyElement = document.querySelector('.difficulty');
  
  if (dif === 'easy') {
    difficultyElement.style.color = 'green';
  } else if (dif === 'medium') {
    difficultyElement.style.color = 'orange';
  } else if (dif === 'hard') {
    difficultyElement.style.color = 'red';
  }
})
