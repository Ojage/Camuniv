//Courses
function    dynamicdropdown2(listindex){
    switch(listindex){
         //Courses for the BMB dept fot the Levels 200,300 & 400 respectively
        case "bmb1":
    //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("BIO 201 Introduction to Computer Science","csc205");
            document.getElementById("course").options[2]=new Option("MLT 201 207 Introduction to Algorithms","csc207");
			document.getElementById("course").options[3]=new Option("CSC 209 Mathematical Foundations of Computer Science","csc209");
            document.getElementById("course").options[4]=new Option("CSC 211 Statistics and Probability","csc211");
    //second Semester
            document.getElementById("course").options[5]=new Option("CSC 210 Matrices and Linear Transformations","csc210");
            document.getElementById("course").options[6]=new Option("CSC 214 PHP and JavaScript Programming","csc207");
			document.getElementById("course").options[7]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[8]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "bmb2":
            //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("BCH 301 301 Data Structures and Algorithms","csc301");
            document.getElementById("course").options[2]=new Option("BCH 313 Computer Organisation and Architecture","csc303");
			document.getElementById("course").options[3]=new Option("CSC 305 Introduction to Object Oriented Programming","csc305");
            document.getElementById("course").options[4]=new Option("CSC 311 Networking","csc311");
            document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
            //second Semester
            document.getElementById("course").options[6]=new Option("BCH 401 308 Java Programming","csc308");
            document.getElementById("course").options[7]=new Option("BCH 405 Databases Design","csc310");
			document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "bmb3":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 405 Data Structures and Algorithms","csc301");
           document.getElementById("course").options[2]=new Option("CSC 407 Computer Organisation and Architecture","csc303");
           document.getElementById("course").options[3]=new Option("CSC 413 Introduction to Object Oriented Programming","csc305");
           document.getElementById("course").options[4]=new Option("CSC 419 Networking","csc311");
           document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
           document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
           document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
           document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
           break;
           
         //Courses for the BPP dept fot the Levels 200,300 & 400 respectively
        case "bpp1":
    //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CPS 201 Introduction to Computer Science","csc205");
            document.getElementById("course").options[2]=new Option("BOT 201 Introduction to Algorithms","csc207");
			document.getElementById("course").options[3]=new Option("CSC 209 Mathematical Foundations of Computer Science","csc209");
            document.getElementById("course").options[4]=new Option("CSC 211 Statistics and Probability","csc211");
    //second Semester
            document.getElementById("course").options[5]=new Option("CSC 210 Matrices and Linear Transformations","csc210");
            document.getElementById("course").options[6]=new Option("CSC 214 PHP and JavaScript Programming","csc207");
			document.getElementById("course").options[7]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[8]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "bpp2":
            //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 301 Data Structures and Algorithms","csc301");
            document.getElementById("course").options[2]=new Option("CSC 303 Computer Organisation and Architecture","csc303");
			document.getElementById("course").options[3]=new Option("CSC 305 Introduction to Object Oriented Programming","csc305");
            document.getElementById("course").options[4]=new Option("CSC 311 Networking","csc311");
            document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
            //second Semester
            document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
            document.getElementById("course").options[7]=new Option("CSC 306 Human Computer Interaction","csc306");
			document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "bpp3":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 405 Artificial Intelligence","csc405");
           document.getElementById("course").options[2]=new Option("CSC 407 Programming Language Paradigms","csc407");
           document.getElementById("course").options[3]=new Option("CSC 413 Mobile App Development","csc405");
           document.getElementById("course").options[4]=new Option("CSC 419 Introductory Process Algebra","csc419");
           
           
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
           document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
           document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
           document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
           break;
         //Courses for the CHM dept fot the Levels 200,300 & 400 respectively
        case "chm1":
    //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 205 Introduction to Computer Science","csc205");
            document.getElementById("course").options[2]=new Option("CSC 207 Introduction to Algorithms","csc207");
			document.getElementById("course").options[3]=new Option("CSC 209 Mathematical Foundations of Computer Science","csc209");
            document.getElementById("course").options[4]=new Option("CSC 211 Statistics and Probability","csc211");
    //second Semester
            document.getElementById("course").options[5]=new Option("CSC 210 Matrices and Linear Transformations","csc210");
            document.getElementById("course").options[6]=new Option("CSC 214 PHP and JavaScript Programming","csc207");
			document.getElementById("course").options[7]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[8]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "chm2":
            //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 301 Data Structures and Algorithms","csc301");
            document.getElementById("course").options[2]=new Option("CSC 303 Computer Organisation and Architecture","csc303");
			document.getElementById("course").options[3]=new Option("CSC 305 Introduction to Object Oriented Programming","csc305");
            document.getElementById("course").options[4]=new Option("CSC 311 Networking","csc311");
            document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
            //second Semester
            document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
            document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
			document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "chm3":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 405 Data Structures and Algorithms","csc301");
           document.getElementById("course").options[2]=new Option("CSC 407 Computer Organisation and Architecture","csc303");
           document.getElementById("course").options[3]=new Option("CSC 413 Introduction to Object Oriented Programming","csc305");
           document.getElementById("course").options[4]=new Option("CSC 419 Networking","csc311");
           document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
           document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
           document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
           document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
           break;
           
        //Courses for the CSC dept fot the Levels 200,300 & 400 respectively
        case "csc1":
    //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 205 Introduction to Computer Science","csc205");
            document.getElementById("course").options[2]=new Option("CSC 207 Introduction to Algorithms","csc207");
			document.getElementById("course").options[3]=new Option("CSC 209 Mathematical Foundations of Computer Science","csc209");
            document.getElementById("course").options[4]=new Option("CSC 211 Statistics and Probability","csc211");
    //second Semester
            document.getElementById("course").options[5]=new Option("CSC 210 Matrices and Linear Transformations","csc210");
            document.getElementById("course").options[6]=new Option("CSC 214 PHP and JavaScript Programming","csc207");
			document.getElementById("course").options[7]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[8]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "csc2":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 301 Data Structures and Algorithms","csc301");
           document.getElementById("course").options[2]=new Option("CSC 303 Computer Organisation and Architecture","csc303");
           document.getElementById("course").options[3]=new Option("CSC 305 Introduction to Object Oriented Programming","csc305");
           document.getElementById("course").options[4]=new Option("CSC 311 Networking","csc311");
           document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
           document.getElementById("course").options[7]=new Option("CSC 306 Human Computer Interaction","csc306");
           document.getElementById("course").options[8]=new Option("CSC 314 Operating Systems","csc314");
           document.getElementById("course").options[9]=new Option("CSC 316 Functional Programming","csc316");
           break;
        case "csc3":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 405 Artificial Intelligence","csc405");
           document.getElementById("course").options[2]=new Option("CSC 407 Programming Paradigms","csc407");
           document.getElementById("course").options[3]=new Option("CSC 413 Mobile Application Development","csc413");
           document.getElementById("course").options[4]=new Option("CSC 419 Introductory Process Algebra","csc419");
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 498 Project Writing","csc498");
           document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
           document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
           document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
           break;
         //Courses for the ENV dept fot the Levels 200,300 & 400 respectively
        case "env1":
    //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 205 Introduction to Computer Science","csc205");
            document.getElementById("course").options[2]=new Option("CSC 207 Introduction to Algorithms","csc207");
			document.getElementById("course").options[3]=new Option("CSC 209 Mathematical Foundations of Computer Science","csc209");
            document.getElementById("course").options[4]=new Option("CSC 211 Statistics and Probability","csc211");
    //second Semester
            document.getElementById("course").options[5]=new Option("CSC 210 Matrices and Linear Transformations","csc210");
            document.getElementById("course").options[6]=new Option("CSC 214 PHP and JavaScript Programming","csc207");
			document.getElementById("course").options[7]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[8]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "env2":
            //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 301 Data Structures and Algorithms","csc301");
            document.getElementById("course").options[2]=new Option("CSC 303 Computer Organisation and Architecture","csc303");
			document.getElementById("course").options[3]=new Option("CSC 305 Introduction to Object Oriented Programming","csc305");
            document.getElementById("course").options[4]=new Option("CSC 311 Networking","csc311");
            document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
            //second Semester
            document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
            document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
			document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "env3":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 405 Data Structures and Algorithms","csc301");
           document.getElementById("course").options[2]=new Option("CSC 407 Computer Organisation and Architecture","csc303");
           document.getElementById("course").options[3]=new Option("CSC 413 Introduction to Object Oriented Programming","csc305");
           document.getElementById("course").options[4]=new Option("CSC 419 Networking","csc311");
           document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
           document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
           document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
           document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
           break;
            //Courses for the GEO dept fot the Levels 200,300 & 400 respectively
        case "geo1":
    //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 205 Introduction to Computer Science","csc205");
            document.getElementById("course").options[2]=new Option("CSC 207 Introduction to Algorithms","csc207");
			document.getElementById("course").options[3]=new Option("CSC 209 Mathematical Foundations of Computer Science","csc209");
            document.getElementById("course").options[4]=new Option("CSC 211 Statistics and Probability","csc211");
    //second Semester
            document.getElementById("course").options[5]=new Option("CSC 210 Matrices and Linear Transformations","csc210");
            document.getElementById("course").options[6]=new Option("CSC 214 PHP and JavaScript Programming","csc207");
			document.getElementById("course").options[7]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[8]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "geo2":
            //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 301 Data Structures and Algorithms","csc301");
            document.getElementById("course").options[2]=new Option("CSC 303 Computer Organisation and Architecture","csc303");
			document.getElementById("course").options[3]=new Option("CSC 305 Introduction to Object Oriented Programming","csc305");
            document.getElementById("course").options[4]=new Option("CSC 311 Networking","csc311");
            document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
            //second Semester
            document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
            document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
			document.getElementById("course").options[8]=new Option("CSC 306 Human-Computer Interaction and User Interface Design","csc306");
            document.getElementById("course").options[9]=new Option("CSC 314 Operating Systems","csc314");
            break;
        case "geo3":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 405 Data Structures and Algorithms","csc301");
           document.getElementById("course").options[2]=new Option("CSC 407 Computer Organisation and Architecture","csc303");
           document.getElementById("course").options[3]=new Option("CSC 413 Introduction to Object Oriented Programming","csc305");
           document.getElementById("course").options[4]=new Option("CSC 419 Networking","csc311");
           document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
           document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
           document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
           document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
           break;
            //Courses for the MAT dept fot the Levels 200,300 & 400 respectively
        case "mat1":
    //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 205 Introduction to Computer Science","csc205");
            document.getElementById("course").options[2]=new Option("CSC 207 Introduction to Algorithms","csc207");
			document.getElementById("course").options[3]=new Option("CSC 209 Mathematical Foundations of Computer Science","csc209");
            document.getElementById("course").options[4]=new Option("CSC 211 Statistics and Probability","csc211");
    //second Semester
            document.getElementById("course").options[5]=new Option("CSC 210 Matrices and Linear Transformations","csc210");
            document.getElementById("course").options[6]=new Option("CSC 214 PHP and JavaScript Programming","csc207");
			document.getElementById("course").options[7]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[8]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "mat2":
            //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 301 Data Structures and Algorithms","csc301");
            document.getElementById("course").options[2]=new Option("CSC 303 Computer Organisation and Architecture","csc303");
			document.getElementById("course").options[3]=new Option("CSC 305 Introduction to Object Oriented Programming","csc305");
            document.getElementById("course").options[4]=new Option("CSC 311 Networking","csc311");
            document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
            //second Semester
            document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
            document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
			document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "mat3":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 405 Data Structures and Algorithms","csc301");
           document.getElementById("course").options[2]=new Option("CSC 407 Computer Organisation and Architecture","csc303");
           document.getElementById("course").options[3]=new Option("CSC 413 Introduction to Object Oriented Programming","csc305");
           document.getElementById("course").options[4]=new Option("CSC 419 Networking","csc311");
           document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
           document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
           document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
           document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
           break;
            //Courses for the MCP dept fot the Levels 200,300 & 400 respectively
        case "mcp1":
    //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 205 Introduction to Computer Science","csc205");
            document.getElementById("course").options[2]=new Option("CSC 207 Introduction to Algorithms","csc207");
			document.getElementById("course").options[3]=new Option("CSC 209 Mathematical Foundations of Computer Science","csc209");
            document.getElementById("course").options[4]=new Option("CSC 211 Statistics and Probability","csc211");
    //second Semester
            document.getElementById("course").options[5]=new Option("CSC 210 Matrices and Linear Transformations","csc210");
            document.getElementById("course").options[6]=new Option("CSC 214 PHP and JavaScript Programming","csc207");
			document.getElementById("course").options[7]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[8]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "mcp2":
            //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 301 Data Structures and Algorithms","csc301");
            document.getElementById("course").options[2]=new Option("CSC 303 Computer Organisation and Architecture","csc303");
			document.getElementById("course").options[3]=new Option("CSC 305 Introduction to Object Oriented Programming","csc305");
            document.getElementById("course").options[4]=new Option("CSC 311 Networking","csc311");
            document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
            //second Semester
            document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
            document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
			document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "mcp3":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 405 Data Structures and Algorithms","csc301");
           document.getElementById("course").options[2]=new Option("CSC 407 Computer Organisation and Architecture","csc303");
           document.getElementById("course").options[3]=new Option("CSC 413 Introduction to Object Oriented Programming","csc305");
           document.getElementById("course").options[4]=new Option("CSC 419 Networking","csc311");
           document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
           document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
           document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
           document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
           break;
            //Courses for the ZAP dept fot the Levels 200,300 & 400 respectively
        case "zap1":
    //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 205 Introduction to Computer Science","csc205");
            document.getElementById("course").options[2]=new Option("CSC 207 Introduction to Algorithms","csc207");
			document.getElementById("course").options[3]=new Option("CSC 209 Mathematical Foundations of Computer Science","csc209");
            document.getElementById("course").options[4]=new Option("CSC 211 Statistics and Probability","csc211");
    //second Semester
            document.getElementById("course").options[5]=new Option("CSC 210 Matrices and Linear Transformations","csc210");
            document.getElementById("course").options[6]=new Option("CSC 214 PHP and JavaScript Programming","csc207");
			document.getElementById("course").options[7]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[8]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "zap2":
            //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 301 Data Structures and Algorithms","csc301");
            document.getElementById("course").options[2]=new Option("CSC 303 Computer Organisation and Architecture","csc303");
			document.getElementById("course").options[3]=new Option("CSC 305 Introduction to Object Oriented Programming","csc305");
            document.getElementById("course").options[4]=new Option("CSC 311 Networking","csc311");
            document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
            //second Semester
            document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
            document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
			document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "zap3":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 405 Data Structures and Algorithms","csc301");
           document.getElementById("course").options[2]=new Option("CSC 407 Computer Organisation and Architecture","csc303");
           document.getElementById("course").options[3]=new Option("CSC 413 Introduction to Object Oriented Programming","csc305");
           document.getElementById("course").options[4]=new Option("CSC 419 Networking","csc311");
           document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
           document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
           document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
           document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
           break;
     //Courses for the ZAP dept fot the Levels 200,300 & 400 respectively
        case "en1":
    //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 205 Introduction to Computer Science","csc205");
            document.getElementById("course").options[2]=new Option("CSC 207 Introduction to Algorithms","csc207");
			document.getElementById("course").options[3]=new Option("CSC 209 Mathematical Foundations of Computer Science","csc209");
            document.getElementById("course").options[4]=new Option("CSC 211 Statistics and Probability","csc211");
    //second Semester
            document.getElementById("course").options[5]=new Option("CSC 210 Matrices and Linear Transformations","csc210");
            document.getElementById("course").options[6]=new Option("CSC 214 PHP and JavaScript Programming","csc207");
			document.getElementById("course").options[7]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[8]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "en2":
            //first Semester
            document.getElementById("course").options[0]=new Option("Select Course","");
            document.getElementById("course").options[1]=new Option("CSC 301 Data Structures and Algorithms","csc301");
            document.getElementById("course").options[2]=new Option("CSC 303 Computer Organisation and Architecture","csc303");
			document.getElementById("course").options[3]=new Option("CSC 305 Introduction to Object Oriented Programming","csc305");
            document.getElementById("course").options[4]=new Option("CSC 311 Networking","csc311");
            document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
            //second Semester
            document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
            document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
			document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
            document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
            break;
        case "en3":
           //first Semester
           document.getElementById("course").options[0]=new Option("Select Course","");
           document.getElementById("course").options[1]=new Option("CSC 405 Data Structures and Algorithms","csc301");
           document.getElementById("course").options[2]=new Option("CSC 407 Computer Organisation and Architecture","csc303");
           document.getElementById("course").options[3]=new Option("CSC 413 Introduction to Object Oriented Programming","csc305");
           document.getElementById("course").options[4]=new Option("CSC 419 Networking","csc311");
           document.getElementById("course").options[5]=new Option("CSC 313 Calculus and Differential Integration","csc313");
           //second Semester
           document.getElementById("course").options[6]=new Option("CSC 308 Java Programming","csc308");
           document.getElementById("course").options[7]=new Option("CSC 310 Databases Design","csc310");
           document.getElementById("course").options[8]=new Option("CSC 208 Programming in Python","csc208");
           document.getElementById("course").options[9]=new Option("CSC 212 Computer Ethics","csc212");
           break;
           
    }return true;
}
// For B..M..B
function dynamicCourseDetails(listindex) {

    switch (listindex) {
        case "bmb205":
            document.getElementById("courses_details_info1").style.display = "block"
            break;
        case "bmb207":
            document.getElementById("courses_details_info2").style.display = "block"
            break;
        case "bmb209":
            document.getElementById("courses_details_info3").style.display = "block"
            break;
        case "bmb210":
            document.getElementById("courses_details_info4").style.display = "block"
            break;
        case "bmb211":
            document.getElementById("courses_details_info5").style.display = "block"
            break;
        case "bmb212":
            document.getElementById("courses_details_info6").style.display = "block"
            break;
        case "bmb214":
            document.getElementById("courses_details_info7").style.display = "block"
            break;
        case "bmb208":
            document.getElementById("courses_details_info8").style.display = "block"
            break;
    
        
    }return true;
}

// For Computer Science
function dynamicCourseDetails(listindex) {

    switch (listindex) {
        case "csc205":
            // Redirect the user to the csc205 special Page "CSC205TUTS.html"
            window.location.assign("./CourseMaterials/ComputerScience/LvL200/FirstSemester/csc205Tuts.html")
            
            break;
        case "csc207":
            document.getElementById("courses_details_info2").style.display = "block"
            break;
        case "csc209":
            document.getElementById("courses_details_info3").style.display = "block"
            break;
        case "csc210":
            document.getElementById("courses_details_info4").style.display = "block"
            break;
        case "csc211":
            document.getElementById("courses_details_info5").style.display = "block"
            break;
        case "csc212":
            document.getElementById("courses_details_info6").style.display = "block"
            break;
        case "csc214":
            document.getElementById("courses_details_info7").style.display = "block"
            break;
        case "csc208":
            document.getElementById("courses_details_info8").style.display = "block"
            break;
    
        
    }return true;
}

// // For Computer Science
// function dynamicCourseDetails(listindex) {

//     switch (listindex) {
//         case "csc205":
//             document.getElementById("courses_details_info1").style.display = "block"
//             break;
//         case "csc207":
//             document.getElementById("courses_details_info2").style.display = "block"
//             break;
//         case "csc209":
//             document.getElementById("courses_details_info3").style.display = "block"
//             break;
//         case "csc210":
//             document.getElementById("courses_details_info4").style.display = "block"
//             break;
//         case "csc211":
//             document.getElementById("courses_details_info5").style.display = "block"
//             break;
//         case "csc212":
//             document.getElementById("courses_details_info6").style.display = "block"
//             break;
//         case "csc214":
//             document.getElementById("courses_details_info7").style.display = "block"
//             break;
//         case "csc208":
//             document.getElementById("courses_details_info8").style.display = "block"
//             break;
    
        
//     }return true;
// }

// // For Computer Science
// function dynamicCourseDetails(listindex) {

//     switch (listindex) {
//         case "csc205":
//             document.getElementById("courses_details_info1").style.display = "block"
//             break;
//         case "csc207":
//             document.getElementById("courses_details_info2").style.display = "block"
//             break;
//         case "csc209":
//             document.getElementById("courses_details_info3").style.display = "block"
//             break;
//         case "csc210":
//             document.getElementById("courses_details_info4").style.display = "block"
//             break;
//         case "csc211":
//             document.getElementById("courses_details_info5").style.display = "block"
//             break;
//         case "csc212":
//             document.getElementById("courses_details_info6").style.display = "block"
//             break;
//         case "csc214":
//             document.getElementById("courses_details_info7").style.display = "block"
//             break;
//         case "csc208":
//             document.getElementById("courses_details_info8").style.display = "block"
//             break;
    
        
//     }return true;
// }
// // For Computer Science
// function dynamicCourseDetails(listindex) {

//     switch (listindex) {
//         //Level 200
//         case "csc205":
//             document.getElementById("courses_details_info1").style.display = "block"
//             break;
//         case "csc207":
//             document.getElementById("courses_details_info2").style.display = "block"
//             break;
//         case "csc209":
//             document.getElementById("courses_details_info3").style.display = "block"
//             break;
//         case "csc210":
//             document.getElementById("courses_details_info4").style.display = "block"
//             break;
//         case "csc211":
//             document.getElementById("courses_details_info5").style.display = "block"
//             break;
//         case "csc212":
//             document.getElementById("courses_details_info6").style.display = "block"
//             break;
//         case "csc214":
//             document.getElementById("courses_details_info7").style.display = "block"
//             break;
//         case "csc208":
//             document.getElementById("courses_details_info8").style.display = "block"
//             break;
//         case "csc208":
//             document.getElementById("courses_details_info9").style.display = "block"
//             break;
//     //Level 300
//         case "csc301":
//             document.getElementById("courses_details_info1_2").style.display = "block"
//             break;
//         case "csc303":
//             document.getElementById("courses_details_info2_2").style.display = "block"
//             break;
//         case "csc305":
//             document.getElementById("courses_details_info3_2").style.display = "block"
//             break;
//         case "csc308":
//             document.getElementById("courses_details_info4_2").style.display = "block"
//             break;
//         case "csc211":
//             document.getElementById("courses_details_info5_2").style.display = "block"
//             break;
//         case "csc310":
//             document.getElementById("courses_details_info6_2").style.display = "block"
//             break;
//         case "csc311":
//             document.getElementById("courses_details_info7_2").style.display = "block"
//             break;
//         case "csc314":
//             document.getElementById("courses_details_info8_2").style.display = "block"
//             break;
//         case "csc316":
//             document.getElementById("courses_details_info9_2").style.display = "block"
//             break;
//         //Level 400
//         case "csc403":
//             document.getElementById("courses_details_info1_3").style.display = "block"
//             break;
//         case "csc405":
//             document.getElementById("courses_details_info2_3").style.display = "block"
//             break;
//         case "csc407":
//             document.getElementById("courses_details_info3_3").style.display = "block"
//             break;
//         case "csc413":
//             document.getElementById("courses_details_info4_3").style.display = "block"
//             break;
//         case "csc419":
//             document.getElementById("courses_details_info5_3").style.display = "block"
//             break;
//         case "csc498":
//             document.getElementById("courses_details_info6_3").style.display = "block"
//             break;
//         case "csc4xx":
//             document.getElementById("courses_details_info7_3").style.display = "block"
//             break;
//         case "csc4xx":
//             document.getElementById("courses_details_info8_2").style.display = "block"
//             break;
//         case "csc4xx":
//             document.getElementById("courses_details_info9_2").style.display = "block"
//             break;
//     }return true;
// }