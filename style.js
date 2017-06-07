console.log();


function leftAlert() {
    alert('left');
}

function rightAlert() {
    alert('rigth')
}

var communityBlokThirdCircle = document.getElementById("communityBlokThirdCircle");
communityBlokThirdCircle.onmouseover = function(){
 this.setAttribute("background-color:#2aba80","background-color:red;");
}
console.log(communityBlokThirdCircle);

var courses = {
    premier: 'url',
    topic: 'text',
    price: 75, 
    isStarted: false,

    getPriceWithDiscaunt: function() {
        return price - 10;
    },

    startCourse: function() {
        isStarted = true;
    },
}

var coursesList = [ courses ];
coursesList = someService.getLatestCourses();





