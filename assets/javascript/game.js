let teamOneShotCountElement = document.querySelector("#teamone-numshots")
let teamOneGoalCountElement = document.querySelector("#teamone-numhits")
let teamOneShootButtonElement = document.querySelector("#teamone-shoot")

let teamOneShotCount = 0;
let teamOneGoalCount = 0;


// try console.log() ?

teamOneShootButtonElement.addEventListener("click", function () {
    teamOneShotCount = teamOneShotCount + 1
    teamOneShotCountElement.innerHTML = teamOneShotCount
    // if shot was successful, increment goalcount by one
    // after incrementing goalcount, set goalcountelement.innerhtml
    // equal to goalcount

    if (Math.random() < .25) {

        teamOneGoalCount = teamOneGoalCount + 1
        teamOneGoalCountElement.innerHTML = teamOneGoalCount
    }
}
)

let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots")
let teamTwoGoalCountElement = document.querySelector("#teamtwo-numhits")
let teamTwoShootButtonElement = document.querySelector("#teamtwo-shoot")

let teamTwoShotCount = 0;
let teamTwoGoalCount = 0;

teamTwoShootButtonElement.addEventListener("click", function () {
    teamTwoShotCount = teamTwoShotCount + 1
    teamTwoShotCountElement.innerHTML = teamTwoShotCount

    // if shot was successful, increment goalcount by Two
    // after incrementing goalcount, set goalcountelement.innerhtml
    // equal to goalcount

    if (Math.random() < .25) {

        teamTwoGoalCount = teamTwoGoalCount + 1
        teamTwoGoalCountElement.innerHTML = teamTwoGoalCount
    }
})


//  check on the following

let NumberOfResetsElement = document.querySelector("#num-resets");

let ResetButtonElement = document.querySelector("#reset");

let ResetsCount = 0;


ResetButtonElement.addEventListener("click",function(){
ResetsCount = ResetsCount + 1
NumberOfResetsElement.innerHTML = ResetsCount




teamOneShotCount = 0
teamOneShotCountElement.innerHTML = teamOneShotCount

teamOneGoalCount = 0
teamOneGoalCountElement.innerHTML = teamOneGoalCount 




teamTwoShotCount = 0
teamTwoShotCountElement.innerHTML = teamTwoShotCount


teamTwoGoalCount  = 0
teamTwoGoalCountElement.innerHTML = teamTwoGoalCount


}) 