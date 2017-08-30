

window.onload = function () {
    let text = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    var count = 0;
    var err = 0;

// setInterval(function() {
//
//     console.log(text.value);
// },5000)

    // setTimeout(function () {
    //     console.log(text.value);
    //     alert('time up champ!!');
    // },60000)

    let i = 60;
    let array = [];
     array = text2.value.split(' ');

        text.onclick = function () {
            ontimer();
        }

        let array2 = [];
         array2 = text.value.split(' ');




    function ontimer() {
        document.getElementById('time').innerHTML = "time : " + i;
        i--;
        if(i<0){
            alert('time up champ!!');
            check();
        }
        else{
            setTimeout(ontimer , 1000)
            text.onclick = null;
        }

    }
    function refresh() {
        location.reload();
    }
    let k=0;
    //setTimeout(check,61000);
    function check() {
        console.log(array2);
        console.log(array);
        console.log(count);
        console.log(err);
        for (k=0; k<=array.length;k++) {
            if (array[i] === array2[i]) {
                count++;
            }
            else {
                err++;
            }
        }
        console.log("speed : "+ count)
        console.log("error : "+ err)
    }
    console.log(array);

}

