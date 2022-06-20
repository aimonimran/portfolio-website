import quizapp from '../../assets/quizapp.png';
import readingroom from '../../assets/readingroom.PNG';
import todo from '../../assets/todo.PNG';
import portfolio from '../../assets/portfolio.PNG';

const portfolioItems = [
    {
        id: 1,
        img: quizapp,
        item: "Quiz App",
        desc: "A quiz application that allows the participants to answer questions. If correct, the users gain points and move towards the next question. If they answer one question wrong, they will lose the game and will earn points equal to the previous question. I created this using HTML5, CSS3, JavaScript and React.js",
        github: "https://github.com/aimonimran/quiz-app",
        liveDemo: "/"
    },
    {
        id: 2,
        img: readingroom,
        item: "Reading Room",
        desc: "An online storytelling platform that allows users to read and write books of their choice while interacting with other users. I'm currently working on this project using HTML5, CSS3, Bootstrap, JavaScript, React.js, PHP and MySQL.",
        github: "https://github.com/aimonimran/reading-room",
        liveDemo: ""
    },
    {
        id: 3,
        img: todo,
        item: "To-Do App",
        desc: "An application that allows you to add and delete items. I created this using HTML5, CSS3, JavaScript and React.js",
        github: "https://github.com/aimonimran/todo-app",
        liveDemo: ""
    },
    {
        id: 4,
        img: portfolio,
        item: "Portfolio Website",
        desc: "A portfolio website where I showcase my skills and projects online. I created this using HTML5, CSS3, JavaScript and React.js",
        github: "https://github.com/aimonimran/portfolio",
        liveDemo: "#"
    }
]

export default portfolioItems;