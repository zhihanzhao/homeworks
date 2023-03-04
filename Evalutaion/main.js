//Model
const Model = (() => {
    const state = {
        time : 10,
        scores : 0,
        moleCount : 0,
        data : [{id:1, hidden:true},{id:2, hidden:true},{id:3, hidden:true},{id:4, hidden:true},{id:5, hidden:true},{id:6, hidden:true},{id:7, hidden:true},{id:8, hidden:true},{id:9, hidden:true},{id:10, hidden:true},{id:11, hidden:true},{id:12, hidden:true}]
    }

    const initialize = () => {
        state.time = 10;
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

    const hiddenAll = () => {
        state.data = [{id:1, hidden:true},{id:2, hidden:true},{id:3, hidden:true},{id:4, hidden:true},{id:5, hidden:true},{id:6, hidden:true},{id:7, hidden:true},{id:8, hidden:true},{id:9, hidden:true},{id:10, hidden:true},{id:11, hidden:true},{id:12, hidden:true}];;
        console.log(state.data);
    }

    return{
        state,
        initialize,
        moleIn,
        moleOut,
        checkMoleIn,
        hiddenAll,
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
                <img class="mole ${e.hidden ? "hidden" : ""}" src="mole.jpg" alt="">
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
    //listener : always listening 
    const hitMoleAction = (state,appEl) => {
        appEl.addEventListener('click',(e) => {
            if(e.target.classList.contains("mole")){
                //update data 
                console.log("!!Clickd" + e.target.parentElement.dataset.id);
                state.scores++;
                const id = e.target.parentElement.dataset.id;
                Model.moleIn(id);
                //view data
                View.render(state,appEl);
                //count changed should update too;
                setMoles(state,appEl);
            }
        })
    }

    const startGameAtction = (state,appEl) => {
        appEl.addEventListener('click', (e) => {
            if(e.target.classList.contains("start-game_btn")){
                //change data
                Model.initialize();
                //view data
                View.render(state,appEl);
                //count changed, time changed, should updated too
                setMoles(state,appEl);
                setTime(state,appEl);
            }
        })
    }

    //game function
    const selectMoleAppear = (state,appEl) =>{
        //update data
        let id = Math.floor(Math.random() * 12) + 1;
        while(!Model.checkMoleIn(id)){
            id = Math.floor(Math.random() * 12) + 1;
        }
        Model.moleOut(id);
        //view data
        View.render(state,appEl);
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


    const setTime = (state,appEl) => {
        let timer = setInterval(() => {
            if(state.time > 0){
                state.time --;
                View.render(state,appEl);
            }else{
                clearInterval(timer);
                alert(`Times out! Your final score is ${state.scores}.`);
                //change data() //stop listen the hit action // make all moles hidden
                Model.hiddenAll();
                //view data
                View.render(state,appEl);
            }
        },1000);
    }


    return {
        setMoles,
        setTime,
        hitMoleAction,
        startGameAtction,
    }
})();

const appEl = document.querySelector("#app");
View.render(Model.state,appEl);
Controller.hitMoleAction(Model.state,appEl);
Controller.startGameAtction(Model.state,appEl);









