function formvalidation(){
    //   return true;
      if(document.getElementById("firstname").value==""){
       isfirstnameError= false;
       document.getElementById("isfirstnameError").innerHTML="firstname field must not be empty!!";
       document.getElementById("isfirstnameError").style.color="red"; 
     }else{
        if(document.getElementById("firstname")){
            isfirstnameError= true;
            document.getElementById("isfirstnameError").innerHTML="valid";
            document.getElementById("isfirstnameError").style.color="green"; 
          }
     }

     if(document.getElementById("lastname").value==""){
        isfirstnameError= false;
        document.getElementById("islastnameError").innerHTML="lastname field must not be empty!!";
        document.getElementById("islastnameError").style.color="red"; 
      }else{
         if(document.getElementById("lastname")){
             isfirstnameError= true;
             document.getElementById("islastnameError").innerHTML="valid";
             document.getElementById("islastnameError").style.color="green"; 
           }
      }

      if(document.getElementById("middlename").value==""){
        isfirstnameError= false;
        document.getElementById("ismiddlenameError").innerHTML="middlename field must not be empty!!";
        document.getElementById("ismiddlenameError").style.color="red"; 
      }else{
         if(document.getElementById("middlename")){
             isfirstnameError= true;
             document.getElementById("ismiddlenameError").innerHTML="valid";
             document.getElementById("ismiddlenameError").style.color="green"; 
           }
      }

      if(document.getElementById("email").value==""){
        isfirstnameError= false;
        document.getElementById("isemailError").innerHTML="e-mail field must not be empty!!";
        document.getElementById("isemailError").style.color="red"; 
      }else{
         if(document.getElementById("email")){
             isfirstnameError= true;
             document.getElementById("isemailError").innerHTML="valid";
             document.getElementById("isemailError").style.color="green"; 
           }
      }

      if(document.getElementById("phoneno").value==""){
        isfirstnameError= false;
        document.getElementById("isphonenoError").innerHTML="phone number field must not be empty!!";
        document.getElementById("isphonenoError").style.color="red"; 
      }else{
         if(document.getElementById("phone")){
             isfirstnameError= true;
             document.getElementById("isphonenoError").innerHTML="valid";
             document.getElementById("isphonenoError").style.color="green"; 
           }
      }

       if(document.getElementById("address").value==""){
        isfirstnameError= false;
        document.getElementById("isaddressError").innerHTML="address field must not be empty!!";
        document.getElementById("isaddressError").style.color="red"; 
      }else{
         if(document.getElementById("address")){
             isfirstnameError= true;
             document.getElementById("isaddressError").innerHTML="valid";
             document.getElementById("isaddressError").style.color="green"; 
           }
      }

       if(document.getElementById("fullname").value==""){
        isfirstnameError= false;
        document.getElementById("isfullnameError").innerHTML="fullname field must not be empty!!";
        document.getElementById("isfullnameError").style.color="red"; 
      }else{
         if(document.getElementById("fullname")){
             isfirstnameError= true;
             document.getElementById("isfullnameError").innerHTML="valid";
             document.getElementById("isfullnameError").style.color="green"; 
           }
      }

      if(document.getElementById("phoneno2").value==""){
        isfirstnameError= false;
        document.getElementById("isphoneno2Error").innerHTML="phone number field must not be empty!!";
        document.getElementById("isphoneno2Error").style.color="red"; 
      }else{
         if(document.getElementById("phone2")){
             isfirstnameError= true;
             document.getElementById("isphoneno2Error").innerHTML="valid";
             document.getElementById("isphoneno2Error").style.color="green"; 
           }
      }

       if(document.getElementById("homeaddress").value==""){
        isfirstnameError= false;
        document.getElementById("ishomeaddressError").innerHTML="homeaddress field must not be empty!!";
        document.getElementById("ishomeaddressError").style.color="red"; 
      }else{
         if(document.getElementById("homeaddress")){
             isfirstnameError= true;
             document.getElementById("ishomeaddressError").innerHTML="valid";
             document.getElementById("ishomeaddressError").style.color="green"; 
           }
      }

      if(document.getElementById("email2").value==""){
        isfirstnameError= false;
        document.getElementById("isemail2Error").innerHTML="e-mail field must not be empty!!";
        document.getElementById("isemail2Error").style.color="red"; 
      }else{
         if(document.getElementById("email2")){
             isfirstnameError= true;
             document.getElementById("isemail2Error").innerHTML="valid";
             document.getElementById("isemail2Error").style.color="green"; 
           }
      }

      
 if(document.getElementById("occupation").value==""){
        isfirstnameError= false;
        document.getElementById("isoccupationError").innerHTML="occupation field must not be empty!!";
        document.getElementById("isoccupationError").style.color="red"; 
      }else{
         if(document.getElementById("occupation")){
             isfirstnameError= true;
             document.getElementById("isoccupationError").innerHTML="valid";
             document.getElementById("isoccupationError").style.color="green"; 
           }
      }

      if(document.getElementById("height").value==""){
        isfirstnameError= false;
        document.getElementById("isheightError").innerHTML="height field must not be empty!!";
        document.getElementById("isheightError").style.color="red"; 
      }else{
         if(document.getElementById("height")){
             isfirstnameError= true;
             document.getElementById("isheightError").innerHTML="valid";
             document.getElementById("isheightError").style.color="green"; 
           }
      }

      if(document.getElementById("weight").value==""){
        isfirstnameError= false;
        document.getElementById("isweightError").innerHTML="weight field must not be empty!!";
        document.getElementById("isweightError").style.color="red"; 
      }else{
         if(document.getElementById("weight")){
             isfirstnameError= true;
             document.getElementById("isweightError").innerHTML="valid";
             document.getElementById("isweightError").style.color="green"; 
           }
      }

    //   if(isfirstnameError==islastnameError==ismiddlenameError==isemailError==isphonenoError==isaddressError==isfullnameError==isphoneno2Error==ishomeaddressError==isemail2Error==isoccupationError==isheightError==isweightError==false){
    //     return false;
    // }else{
    //     return true;
    // }

    }


    var select = document.getElementById("selectsub1");
    var subjects = ['Mathematics' , 'English' , 'Biology' , 'Civic-Education' , 'Economics' , 'Data-Processing', 'Physics' , 'Further-Mathematics' , 'Chemistry' , 'Technical-Drawing'];
    for(var i = 0;i < subjects.length; i++) {
        var opt = subjects[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectGrade1");
    var grades = ['A1' , 'B2' , 'B3' , 'C4' , 'C5' , 'C6', 'D7' , 'E8' , 'F9'] ;
    for(var i = 0;i < grades.length; i++) {
        var opt = grades[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectsub2");
    var subjects = ['Mathematics' , 'English' , 'Biology' , 'Civic-Education' , 'Economics' , 'Data-Processing', 'Physics' , 'Further-Mathematics' , 'Chemistry' , 'Technical-Drawing'];
    for(var i = 0;i < subjects.length; i++) {
        var opt = subjects[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectGrade2");
    var grades = ['A1' , 'B2' , 'B3' , 'C4' , 'C5' , 'C6', 'D7' , 'E8' , 'F9'] ;
    for(var i = 0;i < grades.length; i++) {
        var opt = grades[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectsub3");
    var subjects = ['Mathematics' , 'English' , 'Biology' , 'Civic-Education' , 'Economics' , 'Data-Processing', 'Physics' , 'Further-Mathematics' , 'Chemistry' , 'Technical-Drawing'];
    for(var i = 0;i < subjects.length; i++) {
        var opt = subjects[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectGrade3");
    var grades = ['A1' , 'B2' , 'B3' , 'C4' , 'C5' , 'C6', 'D7' , 'E8' , 'F9'] ;
    for(var i = 0;i < grades.length; i++) {
        var opt = grades[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectsub4");
    var subjects = ['Mathematics' , 'English' , 'Biology' , 'Civic-Education' , 'Economics' , 'Data-Processing', 'Physics' , 'Further-Mathematics' , 'Chemistry' , 'Technical-Drawing'];
    for(var i = 0;i < subjects.length; i++) {
        var opt = subjects[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectGrade4");
    var grades = ['A1' , 'B2' , 'B3' , 'C4' , 'C5' , 'C6', 'D7' , 'E8' , 'F9'] ;
    for(var i = 0;i < grades.length; i++) {
        var opt = grades[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectsub5");
    var subjects = ['Mathematics' , 'English' , 'Biology' , 'Civic-Education' , 'Economics' , 'Data-Processing', 'Physics' , 'Further-Mathematics' , 'Chemistry' , 'Technical-Drawing'];
    for(var i = 0;i < subjects.length; i++) {
        var opt = subjects[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectGrade5");
    var grades = ['A1' , 'B2' , 'B3' , 'C4' , 'C5' , 'C6', 'D7' , 'E8' , 'F9'] ;
    for(var i = 0;i < grades.length; i++) {
        var opt = grades[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectsub6");
    var subjects = ['Mathematics' , 'English' , 'Biology' , 'Civic-Education' , 'Economics' , 'Data-Processing', 'Physics' , 'Further-Mathematics' , 'Chemistry' , 'Technical-Drawing'];
    for(var i = 0;i < subjects.length; i++) {
        var opt = subjects[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectGrade6");
    var grades = ['A1' , 'B2' , 'B3' , 'C4' , 'C5' , 'C6', 'D7' , 'E8' , 'F9'] ;
    for(var i = 0;i < grades.length; i++) {
        var opt = grades[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectsub7");
    var subjects = ['Mathematics' , 'English' , 'Biology' , 'Civic-Education' , 'Economics' , 'Data-Processing', 'Physics' , 'Further-Mathematics' , 'Chemistry' , 'Technical-Drawing'];
    for(var i = 0;i < subjects.length; i++) {
        var opt = subjects[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectGrade7");
    var grades = ['A1' , 'B2' , 'B3' , 'C4' , 'C5' , 'C6', 'D7' , 'E8' , 'F9'] ;
    for(var i = 0;i < grades.length; i++) {
        var opt = grades[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectsub8");
    var subjects = ['Mathematics' , 'English' , 'Biology' , 'Civic-Education' , 'Economics' , 'Data-Processing', 'Physics' , 'Further-Mathematics' , 'Chemistry' , 'Technical-Drawing'];
    for(var i = 0;i < subjects.length; i++) {
        var opt = subjects[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectGrade8");
    var grades = ['A1' , 'B2' , 'B3' , 'C4' , 'C5' , 'C6', 'D7' , 'E8' , 'F9'] ;
    for(var i = 0;i < grades.length; i++) {
        var opt = grades[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectsub9");
    var subjects = ['Mathematics' , 'English' , 'Biology' , 'Civic-Education' , 'Economics' , 'Data-Processing', 'Physics' , 'Further-Mathematics' , 'Chemistry' , 'Technical-Drawing'];
    for(var i = 0;i < subjects.length; i++) {
        var opt = subjects[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var select = document.getElementById("selectGrade9");
    var grades = ['A1' , 'B2' , 'B3' , 'C4' , 'C5' , 'C6', 'D7' , 'E8' , 'F9'] ;
    for(var i = 0;i < grades.length; i++) {
        var opt = grades[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }