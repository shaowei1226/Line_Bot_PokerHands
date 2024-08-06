const cardGallery = document.getElementById('cardGallery');

// 当前活动的输入字段
let activeInputId = '';




// 监听输入字段的选择
const inputFields = ['heroHands', 'flopCards', 'turnCard', 'riverCard'];
inputFields.forEach(fieldId => {
    document.getElementById(fieldId).addEventListener('focus', function() {
        activeInputId = fieldId;
    });
});




document.getElementById('recordHandBtn').addEventListener('click', function() {
    const level = document.getElementById('level').value;
    const players = document.getElementById('players').value;
    const heroPosition = document.getElementById('heroPosition').value;
    const heroStack = document.getElementById('heroStack').value;
    const otherStacks = document.getElementById('otherStacks').value;

    const heroHand = document.getElementById('heroHands').value;
    const preFlopAction = document.getElementById('preFlopAction').value;
    const flopCards = document.getElementById('flopCards').value;
    const flopAction = document.getElementById('flopAction').value;
    const turnCard = document.getElementById('turnCard').value;
    const turnAction = document.getElementById('turnAction').value;
    const riverCard = document.getElementById('riverCard').value;
    const riverAction = document.getElementById('riverAction').value;

    const handSummary = `
Level: ${level}
玩家人數: ${players}
Hero 位置: ${heroPosition}
Hero 後手: ${heroStack}
其他玩家後手: ${otherStacks}

Hero 手牌: ${heroHand}
PreFlopAction: ${preFlopAction}
Flop : ${flopCards}
Flop Action: ${flopAction}
Turn : ${turnCard}
Turn Action: ${turnAction}
River : ${riverCard}
River Action: ${riverAction}
    `;

    document.getElementById('handSummary').textContent = handSummary;
});
