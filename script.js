//https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/003-JS-DOM.md


// Q1   :   Color a span/div element content when a user moves the mouse over the element
    
    // let label = document.createElement("div");
    // label.innerText= "Hi this is a div";
    // label.setAttribute("id","divId");
    // document.body.append(label);
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

// Q5  :    Convert a given number from decimal to binary or hexadecimal


    // function createLabel(tagname,content,attrname,attrvalue){
    //     let label = document.createElement(tagname);
    //     label.innerText=content;
    //     label.setAttribute(attrname,attrvalue);
    //     return label;
    // }
    // Decimal to Binary        
        // const labelTagD2B = createLabel("label","Enter the decimal value : ","for","inputValue");
        // const inputTagD2B = createLabel("input","type here","type","text");
        // const btnTagD2B = createLabel("button","Submit","type","submit");
        // const spanTagD2B = createLabel("span"," ","id","span5");
        // inputTagD2B.id = "inputValuDBe";
        // document.body.append(labelTagD2B,inputTagD2B,btnTagD2B,spanTagD2B);
        // btnTagD2B.addEventListener("click",()=>{
        //     let num = document.querySelector("#inputValueDB").value
        //     let binary = "";
        //     while(num>0){
        //         binary = (num%2)+ binary;
        //         num = Math.floor(num/2);
        //     }    
        //     return spanTagD2B.innerText = `Binary value of the input is ${binary}`;
        // });

    // Decimal to Hexadecimal
        // const labelTagD2H = createLabel("label","Enter the decimal value : ","for","inputValue");
        // const inputTagD2H = createLabel("input","type here","type","text");
        // const btnTagD2H = createLabel("button","Submit","type","submit");
        // const spanTagD2H = createLabel("span"," ","id","span5");
        // inputTagD2H.id = "inputValueDH";
        // document.body.append(labelTagD2H,inputTagD2H,btnTagD2H,spanTagD2H)
        // btnTagD2H.addEventListener("click",()=>{
        //     let num1 = +(document.querySelector("#inputValueDH").value);
        //     let hexadeci = num1.toString(16);    
        //     return spanTagD2H.innerText = `Hexadecimal value for the input is ${hexadeci}`;
        // });

// ---------------------------------------------------------------------------------------------------------------------------------------

// Q6   :   With Javascript write a simple from validation

    // function createLabel(tagname,content,attrname,attrvalue){
    //     let label = document.createElement(tagname);
    //     label.innerText=content;
    //     label.setAttribute(attrname,attrvalue);
    //     return label;
    // }
    // const formTag = createLabel("form","","id","myform");
    // const division1 = createLabel("div","","id","div1");
    // const division2 = createLabel("div","","id","div2");
    // const labelTag1 = createLabel("label","Enter Email-Id : ","for","email");
    // const labelTag2 = createLabel("label","Enter password : ","for","password");
    // const inputTag1 = createLabel("input","Enter here","type","email");
    // const inputTag2 = createLabel("input","Enter here","type","password");
    // inputTag1.id = "email";
    // inputTag1.name = "email"
    // inputTag2.id = "password";
    // inputTag2.name = "password"
    // const btnTag = createLabel("button","Submit","type","submit");
    // division1.append(labelTag1,inputTag1);
    // division2.append(labelTag2,inputTag2);
    // formTag.append(division1,division2,btnTag);
    // document.body.append(formTag);
    // btnTag.addEventListener("click",()=>{
    //     let email = document.querySelector("#email").value;
    //     let password = document.querySelector("#password").value;        
    //     if (email == "" || password == "") {
    //         alert("Both name and email must be filled out");
    //     } else {
    //         alert("Form submitted successfully!");
    //     }
    // });

// ---------------------------------------------------------------------------------------------------------------------------------------

// Q7   :   In your HTML Add two buttons, where first button action for full screen mode and the second button for exit from full screen mode

    // function createLabel(tagname,content,attrname,attrvalue){
    //     let label = document.createElement(tagname);
    //     label.innerText=content;
    //     label.setAttribute(attrname,attrvalue);
    //     return label;
    // }
    // const btnFull = createLabel("button","Fullscreen" ,"type", "button");
    // const btnEscFull = createLabel("button","Escape Fullscreen" ,"type", "button");
    // document.body.append(btnEscFull, btnFull);
    // btnFull.addEventListener("click",()=>{
    //     let element = document.documentElement;
    //     if(element.requestFullscreen){
    //         element.requestFullscreen();
    //     } else if (element.mozRequestFullScreen) { /* Firefox */
    //         element.mozRequestFullScreen();
    //     } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    //         element.webkitRequestFullscreen();
    //     } else if (element.msRequestFullscreen) { /* IE/Edge */
    //         element.msRequestFullscreen();
    //     }
    // });

    // btnEscFull.addEventListener("click",()=>{
    //     if (document.exitFullscreen) {
    //         document.exitFullscreen();
    //     } else if (document.mozCancelFullScreen) { /* Firefox */
    //         document.mozCancelFullScreen();
    //     } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    //         document.webkitExitFullscreen();
    //     } else if (document.msExitFullscreen) { /* IE/Edge */
    //         document.msExitFullscreen();
    //     }
    // });

// ---------------------------------------------------------------------------------------------------------------------------------------

// Q8   :   When user press any key in your html page show a alert that Invalid Key Pressed, but when user press spacebar show an alert Thank You..!! and close the current window.

    // document.addEventListener("keydown", function (event) {
    //     if (event.code === "Space") {
    //         alert("Thank You..!!");
    //         window.close();
    //     } else {
    //         alert("Invalid Key Pressed");
    //     }
    // });

// ---------------------------------------------------------------------------------------------------------------------------------------

// Q9   : When a cursor is moved over an content, allow the user to edit the content in HTML page.

    // let label = document.createElement("div");
    // label.innerText= "Hi this is a div";
    // label.setAttribute("id","editable");
    // label.setAttribute("contenteditable","true")
    // document.body.append(label);
    // let editContent = document.querySelector("#editable");
    // editContent.addEventListener("mouseover",()=>editContent.contenteditable =true);
    // editContent.addEventListener("mouseout",()=>editContent.contenteditable =false);
   