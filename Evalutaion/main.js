console.log("hello");

//Model
const Model = (() => {
    const state = {
        time : 10,
        scores : 0,
        moleCount : 0,
        data : [{id:1, hidden:true},{id:2, hidden:true},{id:3, hidden:true},{id:4, hidden:true},{id:5, hidden:true},{id:6, hidden:true},{id:7, hidden:true},{id:8, hidden:true},{id:9, hidden:true},{id:10, hidden:true},{id:11, hidden:true},{id:12, hidden:true}]

    }
    const initialize = () => {
        state.time = 8;
        state.scores = 0;
        state.moleCount = 0;
        state.data = [{id:1, hidden:true},{id:2, hidden:true},{id:3, hidden:true},{id:4, hidden:true},{id:5, hidden:true},{id:6, hidden:true},{id:7, hidden:true},{id:8, hidden:true},{id:9, hidden:true},{id:10, hidden:true},{id:11, hidden:true},{id:12, hidden:true}];

    }

    const moleOut = (id) => {
        state.data[id-1].hidden = false;
        state.moleCount++;
    }

    const moleIn = (id) => {
        state.data[id-1].hidden = true;
        state.moleCount--;
    }

    const checkMoleIn = (id) =>{
        return state.data[id-1].hidden;
    }

    const refreshData = () => {
        state.data = [{id:1, hidden:true},{id:2, hidden:true},{id:3, hidden:true},{id:4, hidden:true},{id:5, hidden:true},{id:6, hidden:true},{id:7, hidden:true},{id:8, hidden:true},{id:9, hidden:true},{id:10, hidden:true},{id:11, hidden:true},{id:12, hidden:true}];;
        console.log(state.data);

    }

    return{
        state,
        initialize,
        moleIn,
        moleOut,
        checkMoleIn,
        refreshData,
    }

})();

//View
const View = (() => {

    const render = (state, appEl) => {
        const html = `
        ${ generateHeader(state) }
        ${ generateTimeCounter(state) }
        ${ generateGameBoard(state) }
        `;
        appEl.innerHTML = html;
    }

    const generateHeader = (state) => {
        return `
        <header>
            <h1>Welcome to whack-a-mole</h1>
            <p class="message">Let's Go, your total score is ${state.scores}</p>
            <button class="start-game_btn"> Start Game !</button>
        </header>`;
    }

    const generateTimeCounter = (state) =>{
        return`
        <div class="time-counter">
            <label for="">Time Left</label>${state.time}
        </div>`

    }

    const generateGameBoard = (state) => {
        return `
        <div class="game-board">
            ${ generateCircles(state) }
         </div>
        `
    }

    const generateCircles = (state) => {
        let html = '';
        state.data.forEach(e => {
            html += `
            <div class="circle" data-id =${e.id}>
                <img class="mole ${e.hidden ? "hidden" : ""}" src="mole.jpeg" alt="">
            </div>
            `
        });
        return html;
    }

    return {
        render
    }

})();

//Controller
const Controller = (() => {
    //listener 
    const hitMoleAction = (state,appEl) => {
        appEl.addEventListener('click',(e) => {
            if(e.target.classList.contains("mole")){
                console.log("!!Clickd" + e.target.parentElement.dataset.id);
                state.scores++;
                const id = e.target.parentElement.dataset.id;
                Model.moleIn(id);
                View.render(state,appEl);
                console.log("now:" + state.data);
                //select new one
                selectMoleAppear(state,appEl);
            }
        })
    }

    const startGameAtction = (state,appEl) => {
        appEl.addEventListener('click', (e) => {
            if(e.target.classList.contains("start-game_btn")){
                playGame(state,appEl);
            }
        })
    }

    //game logic
    const selectMoleAppear = (state,appEl) =>{
        let id = Math.floor(Math.random() * 12) + 1;
        while(!Model.checkMoleIn(id)){
            id = Math.floor(Math.random() * 12) + 1;
        }
        console.log("pop:" + id);
        Model.moleOut(id);
        console.log("mole number: " + state.moleCount);
        console.log(state);
        View.render(state,appEl);
    }

    const initialMoles = (state,appEl) => {
        while(state.moleCount < 3){
            selectMoleAppear(state,appEl);
        }

    }

    const setMoles = (state,appEl) => { 
        let interval = setInterval(() => {
            if(state.moleCount < 3){
                selectMoleAppear(state,appEl)
            }else{
                clearInterval(interval);
            }
        },1000);
    }

    const playGame = (state,appEl) =>{
        Model.initialize();
        initialMoles(state,appEl);
        hitMoleAction(state,appEl);

        let timer = setInterval(() => {
            state.time --;
            if(state.time > 0){
                View.render(state,appEl);
            }else{
                clearInterval(timer);
                stopGame(state,appEl);
            }
        },1000);
        
    }

    const stopGame = (state,appEl) => {
        console.log("Stop");
        Model.refreshData();
        View.render(state,appEl);
        alert(`Times out! Your final score is .`);
    }

    return {
        playGame,
        setMoles,
        initialMoles,
        hitMoleAction,
        startGameAtction,
    }
})();

const appEl = document.querySelector("#app");
View.render(Model.state,appEl);

Controller.startGameAtction(Model.state,appEl);







