window.addEventListener(
    'load',blindevents
)
    function blindevents(){
        document.getElementById('clickme').addEventListener(
            'click',
            ()=>{
                alert("hello");
            }
        )
    }


