//https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/003-JS-DOM.md

// Q1   :   Color a span/div element content when a user moves the mouse over the element
    
// let colorChange = document.querySelector("#divId");
    // colorChange.addEventListener("mouseover",()=>colorChange.style.color = "white");
    // colorChange.addEventListener("mouseout", ()=>colorChange.style.color = "aqua");

// ---------------------------------------------------------------------------------------------------------------------------------------

// Q2   :   Use prompt to read a value from user and display it in the span element.
        
    // function createLabel(tagname,content,attrname,attrvalue){
    //     let label = document.createElement(tagname);
    //     label.innerText=content;
    //     label.setAttribute(attrname,attrvalue);
    //     return label;
    // }
    // const labelTag = createLabel("label","Enter the data : ","for","text");
    // const inputTag = createLabel("input","Enter here","id","text");
    // const btnTag = createLabel("button","Submit","type","submit");
    // const spanTag = createLabel("span","","id","span2")
    // document.body.append(labelTag,inputTag,btnTag,spanTag)
    
    // btnTag.addEventListener("click",()=>{
    //     //from inputfield to console
    //         // let inputValue = document.getElementById("text").value;
    //         // console.log(inputValue);
    
    //     //from prompt to console 
    //         // let promptValue = prompt("Enter the value...")
    //         // console.log(promptValue);
    
    //     //from inputfield to span
    //         // let inputValue = document.getElementById("text").value;
    //         // spanTag.innerText= "Result is : "+ inputValue;    
    
    //     //from prompt to span    
    //         let promptValue = prompt("Enter the value...")
    //         spanTag.innerText= "Result is : "+ promptValue;
    // })

// ---------------------------------------------------------------------------------------------------------------------------------------

// Q3  :   Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.

    // function createLabel(tagname,content,attrname,attrvalue){
    //     let label = document.createElement(tagname);
    //     label.innerText=content;
    //     label.setAttribute(attrname,attrvalue);
    //     return label;
    // }
    // const h1Tag = createLabel("h1","Click here to see x & y co-ordinates","id","h1tag")
    // const spanTag = createLabel("span","","id","span3");

    // document.body.append(h1Tag,spanTag);

    // h1Tag.addEventListener("click",(ele)=>{
    //     spanTag.innerText = `X = ${ele.pageX} and Y = ${ele.pageY}`
    // })

// ---------------------------------------------------------------------------------------------------------------------------------------

// Q4  :    Write a Javascript code for character counts in the textarea.
    
    // let division1 = document.createElement("div")
    // let span = document.createElement("span")
    // span.id = "span4"
    // let division2 = document.createElement("div")
    // let textarea = document.createElement("textarea");
    // textarea.rows = "10";
    // textarea.cols = "50";
    // textarea.name = "Input Area";
    // textarea.id = "textArea";
    // division1.appendChild(span);
    // division2.appendChild(textarea)
    // document.body.append(division1,division2)

    // const textAreaData = document.querySelector("#textArea");
    // textAreaData.addEventListener("input",(ele)=>{
    //     span.innerText = `character of the textarea is ${ele.target.value.length}`;
    // })

// ---------------------------------------------------------------------------------------------------------------------------------------

// Q5  : 