window.onload = function () {
    let text1 = document.getElementById('text1');  // text typed
    let text2 = document.getElementById('text2');
    let result = document.getElementById('result');
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

        result.onclick = function () {
            let r = document.getElementById('fresult');
            let r2 = document.getElementById('sresult');
            r.innerText = ("speed :" + count);
            r2.innerText = ("error :" + err);
            console.log("arr1" + array1);
            console.log("arr2" + array2);

        }
        console.log("speed : "+ count);
        console.log("error : "+ err);
    }


    

}

