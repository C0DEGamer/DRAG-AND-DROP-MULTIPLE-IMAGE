

   
    var container1=document.getElementById("container1")
    var container2=document.getElementById("container2")
     var elementlist=document.getElementsByClassName("element")

    

    for(elements of elementlist){
      elements.setAttribute("draggable",true);

       elements.addEventListener('dragstart',(event)=>{
        var targetedelement=event.target

        container2.addEventListener('dragover',(event)=>{
           event.preventDefault();

        })
        container2.addEventListener('drop',(event)=>{
           container2.appendChild(targetedelement);
           targetedelement=""

        })
        container1.addEventListener('dragover',(event)=>{
           event.preventDefault();

        })
                container1.addEventListener('drop',(event)=>{
           

                   container1.appendChild(targetedelement);
                      targetedelement=""

        })
       })


    }








  
