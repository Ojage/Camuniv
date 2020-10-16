//Welcome !!
document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
});

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

// This section allows for the closing of dropdown list, if user clicks out of dropdown.
window.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
})

// We are going to achieve this by creating an object to hold the values
// and their associated dropdown descriptions.
//Firstly, we need to add an event listener to the dropdown so that
//it detects  a change when you pick a new level
//Using the change event listener, we can retrieve the value
//of  the option selected using this.value.

const lvl = {
    "200":[{value:200,desc:"Lvl 200"}]
}

// For Level 2  0  0
// function to Select Faculty
function changeSelect_Level1(){
document.getElementById("Select_Level").innerHTML+= '<label for="levels"> Select Faculty</label> <select id="levels" name="levels"> <span value="Science" onclick="scienceDepts1()">Faculty of Science</span> <span value="Arts">Faculty of Arts</span> <span value="FSMS"> Faculty of Social and Management Sciences</span> <span value="LPS" onclick="changeSelect_Level()">Faculty of Law and Political Science</span> <span value="FET">Faculty of Engineering and Technology</span> <span value="HTTC" onclick="changeSelect_Level()">Higher Technical Teachers Training College Kumba</span> <span value="COT">College of Technology</span> <span value="ASTI" onclick="changeSelect_Level()">Advanced School of Translators and Interpreters</span> <span value="FAVM">Faculty of Agriculture and Veterinary Medicine </span> <span value="FHS" onclick="changeSelect_Level()">Faculty of Health Sciences</span> <span value="FED">Faculty of Education</span>';

}
//Function to Select Department under Faculty of Science
function scienceDepts1(){
    document.getElementById("Select_Level").innerHTML+= '<label for="Dept"> Select Department</label> <select id="levels" name="levels"> <span value="BMB" onclick="selectCourseForBMB()">Biochemistry and Molecular Biology</span> <span value="BPP" onclick="selectCourseForBPP()">Botany and Plant Physiology</span> <span value="chem" onclick="selectCourseForchem()">Chemistry</span> <span value="CSC" onclick="selectCourseForCSC()">Computer Science</span> <span value="ENV" onclick="selectCourseForENV()">Environmenntal Science</span> <span value="Geo" onclick="selectCourseForGeo()">Geology</span> <span value="MAT" onclick="selectCourseForMAT()">Mathematics</span> <span value="MCP" onclick="selectCourseForMCP()">Microbiology and Parasitology</span> <span value="PHY" onclick="selectCourseForPHY()">Physics</span> <span value="ZAP" onclick="selectCourseForZAP()">Zoology and Animal Physiology</span>' ;
}
function selectCourseForBMB(){
    document.getElementById("Select_Level").innerHTML+= '<label for="Dept"> Select Course</label> <select id="levels" name="levels"> <span value="BMB" onclick="selectCourseForBMB()">Biochemistry and Molecular Biology</span> <span value="BPP" onclick="selectCourseForBPP()">Botany and Plant Physiology</span> <span value="chem" onclick="selectCourseForchem()">Chemistry</span> <span value="CSC" onclick="selectCourseForCSC()">Computer Science</span> <span value="ENV" onclick="selectCourseForENV()">Environmenntal Science</span> <span value="Geo" onclick="selectCourseForGeo()">Geology</span> <span value="" onclick="selectCourseForBMB()">Biochemistry and Molecular Biology</span> <span value="BMB" onclick="selectCourseForBMB()">Biochemistry and Molecular Biology</span> <span value="BMB" onclick="selectCourseForBMB()">Biochemistry and Molecular Biology</span> <span value="BMB" onclick="selectCourseForBMB()">Biochemistry and Molecular Biology</span>' ;
}
function selectCourseForCSC(){
    
}
// For Level 3   0   0

function changeSelect_Level2(){
    document.getElementById("Select_Level").innerHTML+= '<label for="levels"> Select Faculty</label> <select id="levels" name="levels"> <span value="Science" onclick="scienceDepts2()">Faculty of Science</span> <span value="Arts">Faculty of Arts</span> <span value="FSMS"> Faculty of Social and Management Sciences</span> <option value="LPS" onclick="changeSelect_Level()">Faculty of Law and Political Science</option> <option value="FET">Faculty of Engineering and Technology</option> <option value="HTTC" onclick="changeSelect_Level()">Higher Technical Teachers Training College Kumba</option> <option value="COT">College of Technology</option> <option value="ASTI" onclick="changeSelect_Level()">Advanced School of Translators and Interpreters</option> <option value="FAVM">Faculty of Agriculture and Veterinary Medicine </option> <option value="FHS" onclick="changeSelect_Level()">Faculty of Health Sciences</option> <option value="FED">Faculty of Education</option>'
    ;
    
    }
 function scienceDepts2(){
        document.getElementById("Select_Level").innerHTML+= '<label for="Dept"> Select Department</label> <select id="levels" name="levels"> <option value="BMP" onclick="change()">Biochemistry and Molecular Biology</option>' ;
    }

    // For Level 4  0  0

    function changeSelect_Level3(){
        document.getElementById("Select_Level").innerHTML+= '<label for="levels"> Select Faculty</label> <select id="levels" name="levels"> <option value="Science" onclick="scienceDepts3()">Faculty of Science</option> <option value="Arts">Faculty of Arts</option> <option value="FSMS"> Faculty of Social and Management Sciences</option> <option value="LPS" onclick="changeSelect_Level()">Faculty of Law and Political Science</option> <option value="FET">Faculty of Engineering and Technology</option> <option value="HTTC" onclick="changeSelect_Level()">Higher Technical Teachers Training College Kumba</option> <option value="COT">College of Technology</option> <option value="ASTI" onclick="changeSelect_Level()">Advanced School of Translators and Interpreters</option> <option value="FAVM">Faculty of Agriculture and Veterinary Medicine </option> <option value="FHS" onclick="changeSelect_Level()">Faculty of Health Sciences</option> <option value="FED">Faculty of Education</option>'
        ;
        
        }
 function scienceDepts3(){
            document.getElementById("Select_Level").innerHTML+= '<label for="Dept"> Select Department</label> <select id="levels" name="levels"> <option value="BMP" onclick="change()">Biochemistry and Molecular Biology</option>' ;
        }

function ChangeSecondList(value) {
    if (value.length) {
        document.getElementById("static-list-div").style.display = "none";
        document.getElementById("dynamic-list-div").style.display = "Block";
        var dropid = document.getElementById("dynamic-list");
        var tar = value.split(":");
        var fac = ["Faculty of Science","Faculty of Arts","Faculty of Social and Management Sciences","Faculty of Law and Political Science","Faculty of Engineering and Technology","Higher Technical Teachers Training College Kumba","College of Technology","Advanced School of Translators and Interpreters","Faculty of Agriculture and Veterinary Medicine","Faculty of Health Sciences","Faculty of Education"];
        for (let index = 0; index < fac.length; index++) {
            const element = array[index];
            document.write("<p>"+(index+1)+"-" +element + "</p>");
            
        }
    }
}
//what I am going to use...
function dynamicdropdown(listindex)
    {
        switch (listindex)
        {
        case "lvl200" :
            document.getElementById("fac").options[0]=new Option("Select Faculty","");
            document.getElementById("fac").options[1]=new Option("Faculty of Arts","fa1");
            document.getElementById("fac").options[2]=new Option("Faculty of Science","fs1");
			document.getElementById("fac").options[3]=new Option("Faculty of Education","fed1");
            document.getElementById("fac").options[4]=new Option("Faculty of Law and Political Science","flps1");
            document.getElementById("fac").options[5]=new Option("Faculty of Engineering and Technology","fet1");
			document.getElementById("fac").options[6]=new Option("Faculty of Health Sciences","fhs1");
            document.getElementById("fac").options[7]=new Option("Faculty of Social and Management Sciences","fsms1");
            document.getElementById("fac").options[8]=new Option("Faculty of Agriculture and Veterinary Medicine","favm1");
			document.getElementById("fac").options[9]=new Option("College Of Technology","cot1");
            break;
        case "lvl300" :
            document.getElementById("fac").options[0]=new Option("Select Faculty","");
            document.getElementById("fac").options[1]=new Option("Faculty of Arts","fa2");
            document.getElementById("fac").options[2]=new Option("Faculty of Science","fs2");
			document.getElementById("fac").options[3]=new Option("Faculty of Education","fed2");
            document.getElementById("fac").options[4]=new Option("Faculty of Law and Political Science","flps2");
            document.getElementById("fac").options[5]=new Option("Faculty of Engineering and Technology","fet2");
			document.getElementById("fac").options[6]=new Option("Faculty of Health Sciences","fhs2");
            document.getElementById("fac").options[7]=new Option("Faculty of Social and Management Sciences","fsms2");
            document.getElementById("fac").options[8]=new Option("Faculty of Agriculture and Veterinary Medicine","favm2");
			document.getElementById("fac").options[9]=new Option("College Of Technology","cot2");
            break;
        case "lvl400":
            document.getElementById("fac").options[0]=new Option("Select Faculty","");
            document.getElementById("fac").options[1]=new Option("Faculty of Arts","fa3");
            document.getElementById("fac").options[2]=new Option("Faculty of Science","fs3");
			document.getElementById("fac").options[3]=new Option("Faculty of Education","fed3");
            document.getElementById("fac").options[4]=new Option("Faculty of Law and Political Science","flps3");
            document.getElementById("fac").options[5]=new Option("Faculty of Engineering and Technology","fet3");
			document.getElementById("fac").options[6]=new Option("Faculty of Health Sciences","fhs3");
            document.getElementById("fac").options[7]=new Option("Faculty of Social and Management Sciences","fsms3");
            document.getElementById("fac").options[8]=new Option("Faculty of Agriculture and Veterinary Medicine","favm3");
			document.getElementById("fac").options[9]=new Option("College Of Technology","cot3");
        }
        return true;

    }
function    dynamicdropdown1(listindex){
    switch(listindex){
        //Departments for the for the faculty of Arts Levels 200,300 & 400 respectively
        case "fa1":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en1");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr1");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht1");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln1");
            break;
        case "fa2":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en2");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr2");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht2");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln2");
            break;
        case "fa3":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en3");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr3");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht3");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln3");
            break;
             //Departments for the for the faculty of Science Levels 200,300 & 400 respectively
         case "fs1":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of Biochemistry and Molecular Biology","bmb1");
            document.getElementById("dept").options[2]=new Option("Deparment of Botany and Plant Physiology","bpp1");
			document.getElementById("dept").options[3]=new Option("Deparment of Chemistry","chm1");
            document.getElementById("dept").options[4]=new Option("Deparment of Computer Science","csc1");
            document.getElementById("dept").options[5]=new Option("Department of Environmental Science","env1");
            document.getElementById("dept").options[6]=new Option("Department of Geology","geo1");
            document.getElementById("dept").options[7]=new Option("Deparment of Mathematics","mat1");
			document.getElementById("dept").options[8]=new Option("Deparment of Microbiology and Parasitology","mcp1");
            document.getElementById("dept").options[9]=new Option("Deparment of Zoology and Animal Physiology","zap1");
            break;
          
        case "fs2":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of Biochemistry and Molecular Biology","bmb2");
            document.getElementById("dept").options[2]=new Option("Deparment of Botany and Plant Physiology","bpp2");
			document.getElementById("dept").options[3]=new Option("Deparment of Chemistry","chm2");
            document.getElementById("dept").options[4]=new Option("Deparment of Computer Science","csc2");
            document.getElementById("dept").options[5]=new Option("Department of Environmental Science","env2");
            document.getElementById("dept").options[6]=new Option("Department of Geology","geo2");
            document.getElementById("dept").options[7]=new Option("Deparment of Mathematics","mat2");
			document.getElementById("dept").options[8]=new Option("Deparment of Microbiology and Parasitology","mcp2");
            document.getElementById("dept").options[9]=new Option("Deparment of Zoology and Animal Physiology","zap2");
            break;
        case "fs3":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of Biochemistry and Molecular Biology","bmb3");
            document.getElementById("dept").options[2]=new Option("Deparment of Botany and Plant Physiology","bpp3");
			document.getElementById("dept").options[3]=new Option("Deparment of Chemistry","chm3");
            document.getElementById("dept").options[4]=new Option("Deparment of Computer Science","csc3");
            document.getElementById("dept").options[5]=new Option("Department of Environmental Science","env3");
            document.getElementById("dept").options[6]=new Option("Department of Geology","geo3");
            document.getElementById("dept").options[7]=new Option("Deparment of Mathematics","mat3");
			document.getElementById("dept").options[8]=new Option("Deparment of Microbiology and Parasitology","mcp3");
            document.getElementById("dept").options[9]=new Option("Deparment of Zoology and Animal Physiology","zap3");
            break;
             //Departments for the for the faculty of Education Levels 200,300 & 400 respectively
         case "fed1":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of CST","cst1");
            document.getElementById("dept").options[2]=new Option("Deparment of EFA","efa1");
			document.getElementById("dept").options[3]=new Option("Deparment of EPY","epy1");
            document.getElementById("dept").options[4]=new Option("Deparment of REF","ref1");
            break;
        case "fed2":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of CST","cst2");
            document.getElementById("dept").options[2]=new Option("Deparment of EFA","efa2");
			document.getElementById("dept").options[3]=new Option("Deparment of EPY","epy2");
            document.getElementById("dept").options[4]=new Option("Deparment of REF","ref2");
            break;
        case "fed3":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of CST","cst3");
            document.getElementById("dept").options[2]=new Option("Deparment of EFA","efa3");
			document.getElementById("dept").options[3]=new Option("Deparment of EPY","epy3");
            document.getElementById("dept").options[4]=new Option("Deparment of REF","ref3");
            break;
             //Departments for the for the faculty of LAw and Political Science Levels 200,300 & 400 respectively
         case "flps1":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en1");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr1");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht1");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln1");
            break;
        case "flps2":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en2");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr2");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht2");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln2");
            break;
        case "flps3":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en3");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr3");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht3");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln3");
            break;
             //Departments for the for the faculty of Engineering & Technology Levels 200,300, 400 & 500 respectively
         case "fet1":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en1");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr1");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht1");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln1");
            break;
        case "fet2":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en2");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr2");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht2");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln2");
            break;
        case "fet3":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en3");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr3");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht3");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln3");
            break;
        case "fet4":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en3");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr3");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht3");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln3");
            break;
         //Departments for the for the faculty of Health Sciences Levels 200,300 & 400 respectively
         case "fhs1":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en1");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr1");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht1");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln1");
            break;
        case "fhs2":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en2");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr2");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht2");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln2");
            break;
        case "fhs3":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en3");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr3");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht3");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln3");
            break;
         //Departments for the for the faculty of Social and MAnagement Sciences 200,300 & 400 respectively
         case "fsms1":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en1");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr1");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht1");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln1");
            break;
        case "fsms2":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en2");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr2");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht2");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln2");
            break;
        case "fsms3":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en3");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr3");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht3");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln3");
            break;
         //Departments for the for the faculty of Agriculture & veterinary Medicine Levels 200,300 & 400 respectively
         case "favm1":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en1");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr1");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht1");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln1");
            break;
        case "favm2":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en2");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr2");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht2");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln2");
            break;
        case "favm3":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en3");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr3");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht3");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln3");
            break;
         //Departments for the for the College Of Technology Levels 200,300 & 400 respectively
         case "cot1":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en1");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr1");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht1");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln1");
            break;
        case "cot2":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en2");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr2");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht2");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln2");
            break;
        case "cot3":
            document.getElementById("dept").options[0]=new Option("Select Department","");
            document.getElementById("dept").options[1]=new Option("Department of English","en3");
            document.getElementById("dept").options[2]=new Option("Deparment of French","fr3");
			document.getElementById("dept").options[3]=new Option("Deparment of History","ht3");
            document.getElementById("dept").options[4]=new Option("Deparment of Linguistics","ln3");
            break;
        
    }return true;
}
