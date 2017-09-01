window.onload = function () {
    let text1 = document.getElementById('text1');  // text typed
    let text2 = document.getElementById('text2');
    let count = 0;
    let err = 0;

// setInterval(function() {
//
//     console.log(text.value);
// },5000)

    // setTimeout(function () {
    //     console.log(text.value);
    //     alert('time up champ!!');
    // },60000)

    let time = 60;
    let array2 = [];
    array2 = text2.value.split(' ');

    text1.onclick = function () {
        ontimer();
    }

    let array1 = [];
   




    function ontimer() {
        document.getElementById('time').innerHTML = "time : " + time;
        time--;
        if(time<0){
            alert('time up champ!!');
            array1 = text1.value.split(' ');
            check();
        }
        else{
            setTimeout(ontimer , 1000)
            text1.onclick = null;
        }

    }
    function refresh() {
        location.reload();
    }
    
    //setTimeout(check,61000);
    function check() {

        for (let k=0; k<array1.length ; k++) {
            if (array1[k] === array2[k]) {
                count++;
            }
            else {
                err++;
            }
        }
        console.log("speed : "+ count);
        console.log("error : "+ err);
    }
    

}

