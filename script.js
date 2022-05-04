let validador = {
    handleSubmit:()=>{
        Event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');
        for(let i=0;i<inputs.length;i++) {
            let input = inputs[i];
            let check = validador.checkInput(input);
            if(check !== true) {
                    send = false;
            }
        }
        
        if(send) {
            form.submit();
        }

         
         }
};

let form = document.querySelector('.validador');
form.addEventListener('submit', validador.handleSubmit);