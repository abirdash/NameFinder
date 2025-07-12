const input = document.getElementById('input')

const btn = document.getElementById('btn')

const Name = document.querySelector('.name')

const names = ["Daniel", "Amanda", "Jonathan", "Annabelle", "Michael", "Andrew", "Joanna", "Nathan", "Angela", "Brian", "Susan", "Alice", "Aaron", "Ava", "Amelia", "Andrew","Brian", "Bella", "Blake", "Brooke", "Benjamin","Catherine", "Caleb", "Chloe", "Cole", "Charlotte","David", "Diana", "Daniel", "Daisy", "Derek","Emma", "Ethan", "Ella", "Evan", "Elena","Frank", "Fiona", "Faith", "Felix", "Freya","Grace", "Gavin", "Georgia", "Grant", "Gabriel","Harry", "Hannah", "Hazel", "Henry", "Hudson","Jack", "Jasmine", "Jacob", "Julia", "Jordan","Karen", "Kevin", "Kylie", "Keith", "Kayla","Liam", "Lily", "Lucas", "Leah", "Logan","Mona", "Michael", "Maya", "Miles", "Madeline","Nathan", "Nora", "Noah", "Nicole", "Neal","Olivia", "Oscar", "Owen", "Opal", "Omar","Peter", "Paige", "Paul", "Piper", "Preston","Quinn", "Quincy", "Queen", "Quinten", "Quella","Rachel", "Ryan", "Ruby", "Riley", "Raymond","Samuel", "Sophie", "Simon", "Stella", "Sean","Tina", "Thomas", "Tracy", "Tyler", "Tessa","Uma", "Uriah", "Ulani", "Ulysses", "Unity","Victor", "Violet", "Vanessa", "Vincent", "Valerie","Yara", "Yvonne", "Yusuf","Yasmin", "Yuri","Zoe", "Zara", "Zane", "Zion", "Zelda",  "Abigail", "Albert", "Amber", "Alden", "Alina","Brandon", "Bianca", "Brett", "Brielle", "Bridget","Carson", "Celia", "Clyde", "Clara", "Carmen","Darren", "Delia", "Dexter", "Daphne", "Dylan","Elijah", "Elsie", "Edgar", "Esther", "Erik","Felicia", "Finn", "Francis", "Frida", "Fabian","Giselle", "Gerald", "Gloria", "Gordon", "Gianna","Heather", "Harper", "Hugh", "Helena", "Hollis","Jared", "Jocelyn", "Joey", "Joyce", "Jude","Kendra", "Kyle", "Kara", "Kurt", "Kassie","Logan", "Laura", "Lawrence", "Lana", "Lorenzo","Mitchell", "Molly", "Marcus", "Miranda", "Melvin","Noelle", "Nigel", "Nina", "Nelson", "Nadia","Odette", "Orlando", "Ophelia", "Otis", "Orla","Preston", "Phoebe", "Perry", "Priscilla", "Porter","Quade", "Quella", "Quest", "Quora", "Quinlan","Renee", "Roland", "Rosa", "Russell", "Reed","Sylvia", "Shawn", "Skyler", "Selena", "Spencer","Travis", "Tasha", "Troy", "Tamara", "Trent","Ursula", "Ulrich", "Unique", "Upton", "Uriel","Vanessa", "Vernon", "Vivian", "Vance", "Valen","Yvette", "Yosef", "Yasmine", "Yuri", "Yolanda","Zara", "Zander", "Zelda", "Zion", "Zeb"];

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        btn.click();
        // let audio = new Audio('pop-331049.mp3');
        // audio.volume = 0.5
        // audio.play();
        btn.classList.add('hovered');
        setTimeout(() => {
            btn.classList.remove('hovered')
        }, 150);
    }
});

btn.addEventListener('click', () => {
    const search = input.value.trim().toLocaleLowerCase();
    Name.innerHTML = '';

    let audio = new Audio('pop-331049.mp3');
    audio.volume = 0.5
    audio.play();

    if (search === '') {
        const p = document.createElement('p');
        p.textContent = 'Please Enter a Word !!'
        p.classList.add('paragraph');
        Name.appendChild(p);
        return;
    }

    const match = names.filter(name => name.toLocaleLowerCase().startsWith(search));

    if (match.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'No names found.. .. ..'
        p.classList.add('paragraph');
        Name.appendChild(p);
    } else {
        match.forEach(name => {
            const p = document.createElement('p');
            p.textContent = name;
            p.classList.add('paragraph');
            Name.appendChild(p);
        });
    }

});