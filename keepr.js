const Keepr = (function(){
    let timerElement = document.createElement("div");
    let timer = document.getElementById("timer")
    let toggleButton = document.createElement("button");

    toggleButton.innerText = "Change Format";

    timer.appendChild(toggleButton)
    timer.appendChild(timerElement)

    toggleButton.addEventListener("click", function(){
        //check the current time format 
        let currentTimeFormat = localStorage.getItem("time-format");

        if(currentTimeFormat == null || typeof currentTimeFormat == undefined){
            console.log("storage does not exist")
            //set the the time format
            localStorage.setItem("time-format", '12');
            
            //refresh the page
            location.reload();
        }else{
            //the storage is not empty
            if(currentTimeFormat == "12"){
                newTimeFormat = "24";
            }else{
                newTimeFormat = "12"
            }

            localStorage.setItem("time-format", newTimeFormat);
            
            //refresh the page
            location.reload()


        }






    })

    function startTimer(){
        const date = new Date();
            let currentHours = date.getHours();
            let currentMinutes = date.getMinutes();
            let currentSeconds = date.getSeconds();

            let displayCurrentHours = null;
            let displayCurrentSeconds = null;
            let amPm = null;
            let show_am_pm = false;

            //retrieve the current time format from localStorage
            let current_time_format = localStorage.getItem("time-format");

            if(current_time_format == "12"){
                show_am_pm = true
            }

            if(currentHours >= 12){
                amPm = 'PM';
            }else{
                amPm = "AM";
            }

            if(current_time_format == "12"){
               displayCurrentHours =  currentHours - 12;
            }else{
                displayCurrentHours = currentHours;
            }

           

            //time format
            if(currentHours > 12){
                current_time_mode = 24;
            }

            //hours
            displayCurrentHours = String(displayCurrentHours);
            if(displayCurrentHours.length == 1){
                displayCurrentHours = `0${displayCurrentHours}`;
            }

            //minutes
            //ensure minutes is a string type
            currentMinutes = String(currentMinutes)
            if(currentMinutes.length == 1){
                currentMinutes = `0${currentMinutes}`;
            }

            //seconds
            displayCurrentSeconds = String(currentSeconds);
            if(displayCurrentSeconds.length == 1){
                displayCurrentSeconds = `0${displayCurrentSeconds}`;
            }


            timerElement.innerHTML = `<h3>${displayCurrentHours} : ${currentMinutes} : ${displayCurrentSeconds} <small>${show_am_pm == true ? amPm : ""}</small></h3>`;
    }



    
    function init_time(){

        // let anchor = document.createElement("a")
        // anchor.href="";
        // anchor.innerText = "Click here to continue"
        
        // document.body.appendChild(anchor)
        // //create Element where the time will be placed
    
        startTimer();
        setInterval(function(){
            startTimer()
        }, 1000)
        
       

     

       


        






    }

    
    
    
    init_time();
}())

