function checkPassword() {
    const input = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');

    if (input.value === data.password) {
        document.getElementById('passwordScreen').classList.add('hidden');
        errorMessage.classList.remove('show');
    } else {
        errorMessage.classList.add('show');
        input.value = '';
        input.focus();

        input.style.animation = 'none';
        setTimeout(() => {
            input.style.animation = 'shake 0.5s';
        }, 10);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('passwordInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    document.getElementById('passwordInput').focus();
});

const style = document.createElement('style');
style.innerHTML = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

const container = document.getElementById('petals-container');
const petalIcons = ['🌸', '❤️', '✨', '☁️'];

function createPetals() {
for (let i = 0; i < 30; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerHTML = petalIcons[Math.floor(Math.random() * petalIcons.length)];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDelay = Math.random() * 10 + 's';
    petal.style.fontSize = (Math.random() * 20 + 10) + 'px';
    container.appendChild(petal);
}
}

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.classList.add('visible');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
if (data.emojiEffects) {
    createPetals();
}

  document.title = data.title;
  document.getElementById("wish").innerHTML = data.wish;
  document.getElementById("name").innerHTML = data.name;
  document.getElementById("relation").innerHTML = data.relation;

  document.getElementById("header_one").innerHTML = data.header_one;
  document.getElementById("paragraph_one").innerHTML = data.paragraph_one;
  document.getElementById("highlight").innerHTML = data.highlight;
  document.getElementById("paragraph_two").innerHTML = data.paragraph_two;

  document.getElementById("header_two").innerHTML = data.header_two;
  document.getElementById("paragraph_three").innerHTML = data.paragraph_three;
  document.getElementById("paragraph_four").innerHTML = data.paragraph_four;

  document.getElementById("header_three").innerHTML = data.header_three;
  document.getElementById("paragraph_five").innerHTML = data.paragraph_five;
  document.getElementById("final_message").innerHTML = data.final_message;

  document.getElementById("footer").innerHTML = data.footer;

  document.getElementById("pic1").src = data.images.pic1;
  document.getElementById("pic2").src = data.images.pic2;
  document.getElementById("pic3").src = data.images.pic3;

});