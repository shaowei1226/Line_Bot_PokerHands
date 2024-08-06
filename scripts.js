// scripts.js
document.getElementById('nextStepBtn').addEventListener('click', function() {
    // 隱藏環境變數區域，顯示 Hero 手牌和下注信息區域
    document.querySelector('.environment-inputs').classList.add('hidden');
    document.querySelector('.hero-hand-inputs').classList.remove('hidden');
});


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

    const heroHand1 = document.getElementById('heroHand1').value;
    const preFlopBet = document.getElementById('preFlopAction').value;
    const flopCards = document.getElementById('flopCards').value;
    const flopBet = document.getElementById('flopAction').value;
    const turnCard = document.getElementById('turnCard').value;
    const turnBet = document.getElementById('turnAction').value;
    const riverCard = document.getElementById('riverCard').value;
    const riverBet = document.getElementById('riverAction').value;

    const handSummary = `
Level: ${level}
玩家人數: ${players}
Hero 位置: ${heroPosition}
Hero 後手: ${heroStack}
其他玩家後手: ${otherStacks}

Hero 手牌: ${heroHand1}
翻前下注尺寸: ${preFlopAction}
Flop 開的牌: ${flopCards}
Flop 下注尺寸: ${flopAction}
Turn 開的牌: ${turnCard}
Turn 下注尺寸: ${turnAction}
River 開的牌: ${riverCard}
River 下注尺寸: ${riverAction}
    `;

    // Display the summary (optional)
    document.getElementById('handSummary').textContent = handSummary;

    // Send data to Line Bot
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: handSummary })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
