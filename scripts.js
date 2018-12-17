$(document).ready(()=>{
    $('button').click(function(){
        let gridSize = $(this).attr('diff');
        let cards = []
        for(let i = 1; i <= (gridSize/2); i++){
            let monsterNumber = i
            if(i<10){
                monsterNumber ="0"+ i
            }
            cards.push(`<img src="./images/monsters-0${i}.png" />`)
            cards.push(`<img src="./images/monsters-0${i}.png" />`)
        }
        cards = shuffleDeck(cards)
        let memoryHTML = ''
        
        cards.forEach((card)=>{
            memoryHTML += `
            <div class="card col-sm-3">
                <div class ="card-holder">
                    <div class="card-front">${card}</div>
                    <div class="card-back"></div>
                </div>
            </div>`
        })
        $('.memory-game').html(memoryHTML)
        $('.card-holder').click(function(){
            let clickCount = 0
            clickCount +=
            $('.move-counter').html($(clickCount))
            $(this).addClass('flip')
            let cardsUp = $('.flip')
            if (cardsUp.length === 2){
                const card1 = cardsUp[0]
                const card2 = cardsUp[1]
                if (card1.innerHTML == card2.innerHTML){
                    cardsUp.removeClass('flip')
                    cardsUp.addClass('matched')
                }else{
                    setTimeout(()=>{
                        cardsUp.removeClass('flip')
                    },2000)
                    
                }
                
            }else{}
            console.log(clickCount)
        })
    })
    
})

function shuffleDeck(aDeckToBeShuffled){
    // Loop. A lot. Like those machines in casinos that make 
    // funny noises.
    // When the loop (lots of times) is document, the array 
    // (deck) will be shuffled
    for(let i = 0; i < 1000000; i++){
        let rand1 = Math.floor(Math.random() * aDeckToBeShuffled.length);
        let rand2 = Math.floor(Math.random() * aDeckToBeShuffled.length);
        // we need to switch aDeckToBeShuffled[rand1] with
        // aDeckToBeShuffled[rand2].
        // BUT, we have to save the value of one of them so
        // we can keep it for later
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2]
        aDeckToBeShuffled[rand2] = card1Defender;
    }
    return aDeckToBeShuffled
}