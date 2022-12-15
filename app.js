const strategies = [
    'Use an old idea',
    'State the problem in words as clearly as possible',
    'Only one element of each kind',
    'Try faking it!',
    'Honour thy error as a hidden intention',
    'Ask your body',
]

const colorList = [
    '2F5C54',
    '2F465C',
    '3B2F5C',
    '5C2F4A',
    '5C422F',
    '465C2F',
    '2F5C33'

]

const text = document.getElementById('text')
const btn = document.getElementById('arrow-btn')
const footerCredit = document.getElementById('footer-credit')

btn.addEventListener('click', randomize)

function randomize() {
    let strategySelector = Math.floor(strategies.length * Math.random())
    let colorSelector = Math.floor(colorList.length * Math.random())

    console.log(strategySelector)
    console.log(colorSelector)

    text.innerText = `${strategies[strategySelector]}`
    document.body.style.background = `linear-gradient(#${colorList[colorSelector]} 50%, #FFFFFF 100%)`
    footerCredit.style.color = `#${colorList[colorSelector]}`
}