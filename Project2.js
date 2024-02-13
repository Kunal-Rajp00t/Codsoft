let str = "";
let buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let btnValue = e.target.innerText; // Get the inner text of the clicked button
        if( btnValue === 'AC'){
            str="";
            document.querySelector(".screen").innerHTML = str;
        }
        else if (btnValue === '=') {
            // Evaluate the expression and update the screen
            try {
                str = eval(str);
                document.querySelector(".screen").innerHTML = str;

            } catch (error) {
                // Handle any errors during evaluation
                document.querySelector(".screen").innerHTML= 'Can Not Perform Action';
                str = '';
            }
        } else {
            str += btnValue;
            document.querySelector(".screen").innerHTML = str;
        }
    });
});
