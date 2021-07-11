let questions = [
    {
        "question": "Wie nennt man die Selbsterneuerungsprozesse des Körpers?",
        "answer_1": "Glykation",
        "answer_2": "Phototaxis",
        "answer_3": "Bambus 3000",
        "answer_4": "Autophagie",
        "right_answer": 4
    },
    {
        "question": "Wessen Tagebücher wurden post mortem als das stoistische Werk Meditations veröffentlicht?",
        "answer_1": "Marcus Tullius Cicero",
        "answer_2": "Marcus Aurelius",
        "answer_3": "Epictetus",
        "answer_4": "Plato",
        "right_answer": 2
    },
    {
        "question": "Wie nannten die alten Ägypter das unendliche Urwasser, dem das All entspringt? ",
        "answer_1": "Amen",
        "answer_2": "Nun",
        "answer_3": "Brahman",
        "answer_4": "Maat",
        "right_answer": 2
    },
    {
        "question": "Wer war Nikola Tesla?",
        "answer_1": "Ein Programmierer und Datenanalyst",
        "answer_2": "Ein bedeutender Politiker Kroatiens",
        "answer_3": "Ein Erfinder, Physiker und Elektroingenieur",
        "answer_4": "Ein Elon Musk",
        "right_answer": 4
    },
    {
        "question": "Auf wen geht das tiefenpsychologische Konzept der Archetypen und das des kollektiven Unbewussten zurück?",
        "answer_1": "Sigmund Freud",
        "answer_2": "Carl Gustav Jung",
        "answer_3": "Gerald Hüther",
        "answer_4": "Erich Fromm",
        "right_answer": 2
    },
    {
        "question": "Für welche Roman-Trilogie ist J.R.R. Tolkien bekannt?",
        "answer_1": "Hier kommt die Maus",
        "answer_2": "Die Tastatur kennt keine Grenzen",
        "answer_3": "Der Herr der Ringe",
        "answer_4": "Der Babo",
        "right_answer": 3
    },
    {
        "question": "Wie heißen die negativ geladenen Elementarteilchen?",
        "answer_1": "Atome",
        "answer_2": "Neutronen",
        "answer_3": "Protonen",
        "answer_4": "Elektronen",
        "right_answer": 4
    },
    {
        "question": "Wenn ein Atom 17 Protonen besitzt, wie viele Elektronen hat es dann?",
        "answer_1": "17",
        "answer_2": "3",
        "answer_3": "0",
        "answer_4": "34",
        "right_answer": 1
    },
    {
        "question": "Welches Tier gilt als intelligentestes?",
        "answer_1": "Die Krake",
        "answer_2": "Der Affe",
        "answer_3": "Der Delfin",
        "answer_4": "Der Rabe",
        "right_answer": 3
    },
    {
        "question": "Wie wird die Bildung von Nervenzellen aus bestimmten Stamm- oder Vorläuferzellen bezeichnet?",
        "answer_1": "Ontogenese",
        "answer_2": "Neurogenese",
        "answer_3": "Epigenese",
        "answer_4": "Phylogenese",
        "right_answer": 2
    },
]

let currentQuestion = 0;

function init() {
    document.getElementById('question_amount').innerHTML = questions.length;

    showquestion();
}

function showquestion() {
    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedAnswerNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedAnswerNumber == question['right_answer']) {
        console.log('richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }
    else {
        console.log('falsche Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('button_nextq').disabled = false;
}


