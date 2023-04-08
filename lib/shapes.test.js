
const {Circle, Triangle, Square} = require("./shapes")


test('triangle is rendering', ()=>{
    expect(`<polygon points="150, 18 244, 182 56, 182">`)
})

test('circle is rendering', ()=>{
    expect(`<circle cx="25" cy="75" r="20"/>`)
})

test('square is rendering', ()=>{
    expect(`<rect x="50" y="20" width="150" height="150"`)
})
