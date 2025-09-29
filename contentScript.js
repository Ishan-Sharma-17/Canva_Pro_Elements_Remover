(() => {
    //Listener to listen from messages from background.js
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {type} = obj;

        if (type == "NEW") {
            filterProElements();
        }
    });

    let visibleElementIndices = [];

    function filterProElements() {
        hideProElements();
        //replaceProElements();
    }

    function hideProElements(){
        setInterval(() => {
            let allRowElements = document.querySelectorAll("div.qFtWQg");
            visibleElementIndices = [];
            for (let elementIndex = 0; elementIndex < allRowElements.length; elementIndex++){
                if (allRowElements[elementIndex].querySelector("span.EHSw9A")){
                    allRowElements[elementIndex].style.display = "none";
                }
                else {
                    visibleElementIndices.push(elementIndex);
                }
            }
        }, 10);
    }

    //NOTE: FUTURE TASK - MODIFY BELOW FUNCTION TO WORK PROPERLY
    /*
    function replaceProElements(){
        setInterval(() => {
            hideProElements();
            let rows = document.querySelectorAll("div.FA8sBg");

            let rowIndex = 0;
            let previousRowIndex = -1;
            let sameRowAdj = 0;
            console.log(rows.length);
            console.log(visibleElementIndices.length);
            for (let elementCount = 0; elementCount < visibleElementIndices.length/2 - 1; elementCount++){
                rowIndex = Math.floor(elementCount / 3);
                if (previousRowIndex == Math.floor((visibleElementIndices[elementCount] + elementCount)/3)){
                    sameRowAdj++;
                }
                else {
                    sameRowAdj = 0;
                }
                console.log(Math.floor((visibleElementIndices[elementCount] + elementCount)/3));
                console.log((visibleElementIndices[elementCount] + elementCount) % 3 - sameRowAdj);
                console.log(rowIndex);
                console.log(elementCount % 3);
                try {  
                    rows[rowIndex].querySelector("div.v1Egnw").replaceChild(rows[Math.floor((visibleElementIndices[elementCount] + elementCount)/3)].querySelector("div.v1Egnw").querySelectorAll("div.qFtWQg")[(visibleElementIndices[elementCount] + elementCount) % 3 - sameRowAdj], rows[rowIndex].querySelector("div.v1Egnw").querySelectorAll("div.qFtWQg")[elementCount % 3]);
                    rows[rowIndex + rows.length/2].querySelector("div.v1Egnw").replaceChild(rows[Math.floor((visibleElementIndices[elementCount] + elementCount)/3) + rows.length/2].querySelector("div.v1Egnw").querySelectorAll("div.qFtWQg")[(visibleElementIndices[elementCount] + elementCount) % 3 - sameRowAdj], rows[rowIndex + rows.length/2].querySelector("div.v1Egnw").querySelectorAll("div.qFtWQg")[elementCount % 3]);
                    console.log("completed one element");
                } catch (error){
                    if (error instanceof TypeError){
                        rows[rowIndex].querySelector("div.v1Egnw").appendChild(rows[Math.floor((visibleElementIndices[elementCount] + elementCount)/3)].querySelector("div.v1Egnw").querySelectorAll("div.qFtWQg")[(visibleElementIndices[elementCount] + elementCount) % 3 - sameRowAdj]);
                        console.log("error check");
                        console.log((visibleElementIndices[elementCount] + elementCount) % 3 - sameRowAdj);
                        console.log(Math.floor((visibleElementIndices[elementCount] + elementCount)/3) + rows.length/2);
                        rows[rowIndex + rows.length/2].querySelector("div.v1Egnw").appendChild(rows[Math.floor((visibleElementIndices[elementCount] + elementCount)/3) + rows.length/2].querySelector("div.v1Egnw").querySelectorAll("div.qFtWQg")[(visibleElementIndices[elementCount] + elementCount) % 3 - sameRowAdj]);
                    }
                    else{
                        console.log(error);
                    }
                }
                previousRowIndex = Math.floor((visibleElementIndices[elementCount] + elementCount)/3);
                hideProElements();
            }
            console.log("completed");            
        }, 10); 
        
        // Best working version repeats every 10 ms --> CHANGE THIS to a more optimal value if necessary
    }
        */
})();