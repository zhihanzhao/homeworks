//Model
const Model = (() => {
    const state = {
        done : true,
        time : 10,
        scores : 0,
        moleCount : 0,
        snakeCount : 0,
        data : [{id:1, moleHide:true, snakeHide:false},{id:2, moleHide:true, snakeHide:false},{id:3, moleHide:true, snakeHide:false},{id:4, moleHide:true, snakeHide:false},{id:5, moleHide:true, snakeHide:false},{id:6, moleHide:true, snakeHide:false},{id:7, moleHide:true, snakeHide:false},{id:8, moleHide:true, snakeHide:false},{id:9, moleHide:true, snakeHide:false},{id:10, moleHide:true, snakeHide:false},{id:11, moleHide:true, snakeHide:false},{id:12, moleHide:true, snakeHide:false}]
    }

    const initialize = () => {
        state.done = false;
        state.time = 10;
        state.scores = 0;
        state.moleCount = 0;
        state.data = [{id:1, moleHide:true, snakeHide:true},{id:2, moleHide:true, snakeHide:true},{id:3, moleHide:true, snakeHide:true},{id:4, moleHide:true, snakeHide:true},{id:5, moleHide:true, snakeHide:true},{id:6, moleHide:true, snakeHide:true},{id:7, moleHide:true, snakeHide:true},{id:8, moleHide:true, snakeHide:true},{id:9, moleHide:true, snakeHide:true},{id:10, moleHide:true, snakeHide:true},{id:11, moleHide:true, snakeHide:true},{id:12, moleHide:true, snakeHide:true}];

    }

    const moleOut = (id) => {
        state.data[id-1].moleHide = false;
        state.moleCount++;
        console.log("mole " + id + " out");
    }

    const moleIn = (id) => {
        state.data[id-1].moleHide = true;
        state.moleCount--;
    }

    const checkMoleIn = (id) =>{
        return state.data[id-1].moleHide;
    }

    const snakeOut = (id) => {
        state.data[id-1].snakeHide = false;
        state.snakeCount++;
        console.log("snake " + id + " out");
    }

    const snakeIn = (id) => {
        state.data[id-1].snakeHide = true;
        state.snakeCount--;
    }

    const checkSnakeIn = (id) =>{
        return state.data[id-1].snakeHide;
    }

    const hiddenAll = () => {
        state.data = [{id:1, moleHide:true, snakeHide:false},{id:2, moleHide:true, snakeHide:false},{id:3, moleHide:true, snakeHide:false},{id:4, moleHide:true, snakeHide:false},{id:5, moleHide:true, snakeHide:false},{id:6, moleHide:true, snakeHide:false},{id:7, moleHide:true, snakeHide:false},{id:8, moleHide:true, snakeHide:false},{id:9, moleHide:true, snakeHide:false},{id:10, moleHide:true, snakeHide:false},{id:11, moleHide:true, snakeHide:false},{id:12, moleHide:true, snakeHide:false}];;
        console.log(state.data);
    }

    return{
        state,
        initialize,
        moleIn,
        moleOut,
        checkMoleIn,
        hiddenAll,
        snakeIn,
        snakeOut,
        checkSnakeIn
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
            <h3 class="message">Let's Go, your total score is ${state.scores}</h3>
            <button class="start-game_btn"> Start Game !</button>
        </header>`;
    }

    const generateTimeCounter = (state) =>{
        return`
        <div class="time-counter">
            <label>Time Left :</label>
            <h1>${state.time}</h1><label>seconds</label>
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
                <img class="mole ${e.moleHide ? "hidden" : ""}" src="mole.jpg" alt="">
                <img class="snake ${e.snakeHide ? "hidden" : ""}" src="snake.jpg" alt="">
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

    //initial
    const initialPage = () => {
        const appEl = document.querySelector("#app");
        View.render(Model.state,appEl);
        startGameAtction(Model.state,appEl);
        hitMoleAction(Model.state,appEl);
        hitSnakeAction(Model.state,appEl);
    }


    
    //listener
    const startGameAtction = (state,appEl) => {
        appEl.addEventListener('click', (e) => {
            if(e.target.classList.contains("start-game_btn")){
                //change data
                Model.initialize();
                //view data
                View.render(state,appEl);

                setMoles(state,appEl);
                setSnake(state,appEl);
                setTime(state,appEl);
            }
        })
    }

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
            }
        })
    }

    const hitSnakeAction = (state,appEl) => {
        appEl.addEventListener('click',(e) => {
            if(e.target.classList.contains("snake") && !state.done){
                //update data 
                console.log("..Clickd" + e.target.parentElement.dataset.id);
                //sign game over
                alert(`Game Over! Your final score is ${state.scores}.`);
                Model.hiddenAll();
                state.done = true;
                //view data
                View.render(state,appEl);
            }
        })
    }

    //game function
    const selectMole = (state,appEl) =>{
        //update data
        let id = Math.floor(Math.random() * 12) + 1;
        while(!Model.checkMoleIn(id) || !Model.checkSnakeIn(id)){
            id = Math.floor(Math.random() * 12) + 1;
        }
        Model.moleOut(id);
        setTimeout(() => (Model.moleIn(id)),2000);
        //view data
        View.render(state,appEl);
    }

    const selectSnake = (state, appEl) => {
        let id = Math.floor(Math.random() * 12) + 1;
        while(!Model.checkMoleIn(id) || !Model.checkSnakeIn(id)){
            id = Math.floor(Math.random() *12) +1;
        }
        Model.snakeOut(id);
        setTimeout(() => (Model.snakeIn(id)),2000);
        View.render(state, appEl);
    }

    const setMoles = (state,appEl) => {
        let interval = setInterval(() => {
            if(state.moleCount < 3 && !state.done){
                selectMole(state,appEl);
            }else if(state.done){
                clearInterval(interval);
            }
        },1000);
    }

    const setSnake = (state,appEl) => {
        let interval = setInterval(() => {
            if(state.snakeCount == 0 && !state.done){
                selectSnake(state,appEl);
            }else if(state.done){
                clearInterval(interval);
            }
        },2000);
    }

    const setTime = (state,appEl) => {
        let timer = setInterval(() => {
            if(state.time > 0 && !state.done){
                console.log("------------" + state.time +"s---------");
                state.time --;
                View.render(state,appEl);
            }else if(state.done){
                console.log("stoped game")
                clearInterval(timer);
            }else{
                clearInterval(timer);
                //sign game over
                alert(`Times out! Your final score is ${state.scores}.`);
                Model.hiddenAll();
                state.done = true;
                //view data
                View.render(state,appEl);
            }
        },1000);
    }


    return {
        initialPage
    }
})();

Controller.initialPage();












