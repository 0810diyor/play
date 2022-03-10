const balance: HTMLElement = document.querySelector('#balance')!
const play: HTMLButtonElement = document.querySelector('#play')!
const bet: HTMLInputElement = document.querySelector('#bet')!

const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card')

let cash:number = 100 
let counter = 0



balance.innerText = `Balance $${cash}`



cards.forEach(card =>{
  card.onclick = () => {
    if(card.classList.contains('is-flipped')){
      return
    }
    

    if(counter < 3){
      card.classList.add('is-flipped')
      counter++

      let number = card.querySelector('.number')!
      if(number.innerHTML === '$'){
        let amount = +bet.value
        cash += amount * 1.5
        balance.innerText = `Balance $${cash}`

        setTimeout(() =>{
          alert('yutding!')
        }, 1000)
        counter = 4
      }
    }
    else if(counter === 3){
      let amount = +bet.value
      cash = cash - amount
      balance.innerText = `Balance $${cash}`
      setTimeout(() =>{
        alert('yutqazdingiz!')
      }, 1000)
      
    }
  }
})




cards.forEach(card => {
  let number = card.querySelector('.number')!
  number.innerHTML = 'X'
})


let r = random(0 , 8)
let card = cards[r]
let number = card.querySelector('.number')!
number.innerHTML = '$'


function random(min:number , max:number){
  return Math.floor(Math.random() * (max - min)) + min;
}






























