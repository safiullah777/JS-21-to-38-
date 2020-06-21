        var d=document;
        // // Chapter # 21 to 25
        // // String Methods




        // // Question no 1
        // var firstName=prompt("enter your first name");
        // var lastName=prompt("enter your last name");
        // var fulName=firstName+lastName;
        // d.write(fullName);



        // // Question no 2
        // var mobile=prompt("enter your favorite mobile phone model");
        // d.write("My favorite phone is:"+mobile+"<br>Length of String:"+mobile.length);




        // // Question no 3
        // var Heart="Pakistan";
        // d.write("String:"+Heart+"<br>index of 'n':"+Heart.indexOf("n"));




        // // Question no 4
        // var hello="Hello World";
        // d.write("String:"+hello+"<br>last index of 'l':"+hello.lastIndexOf("l"))
        



        // // Question no 5
        // var str="Pakistani";
        // d.write("String:"+str+"<br>Character at index 3:"+str.charAt(3))




        // Question no 6
        // var firstName=prompt("enter your first name");
        // var lastName=prompt("enter your last name");
        // var fullName=firstName.concat(" "+lastName);
        // d.write(fullName);




        // // Question no 7
        // var city="Hyderabad";
        // d.write("city:"+city+"<br>after replacement:"+city.replace("Hyder","Islam"));




        // // Question no 8
        // var message="Ali and Sami are best friends. They play cricket and football together.";
        // d.write(message.split("and").join("&"));



        // // Question no 9
        // var num="472";
        // var int=parseInt(num);
        // d.write("value:"+num+"<br>Type:"+typeof(num)+"<br>value:"+int+"<br>Type:"+typeof(int))




        // // Question no 10
        // var peanut="peanuts";
        // d.write("User input:"+peanut+"<br>Upper case:"+peanut.toUpperCase());
    
        



        // // Question no 11
        // var input=prompt("enter any thing").toLowerCase();
        // var titleCase=input.replace(input[0],input[0].toUpperCase());
        // d.write("User input:"+input+"<br>Title case:"+titleCase);


        // // Question no 12
        // var num=35.36;
        // var str=(num*100).toString();
        // d.write("Number:"+num+"<br>Result:"+str);
    




        // // // Question no 13
        // var userName=prompt("enter your name");
        // for(var i=0;i<userName.length;i++){
        //     if(userName.charCodeAt(i)==33||userName.charCodeAt(i)==44||userName.charCodeAt(i)==46||userName.charCodeAt(i)==64){
        //         alert("please enter valid user name");
        //         break;
        //     }
        // }





        // // Question no 14
        // var items=["cake","apple pie","cookie","chips","patties"];
        // var search=prompt("Welcome to ABC Bakery.\nWhat do you want to order sir/ma'am").toLowerCase();
        // for(var i=0;i<items.length;i++){
        //     if(search==items[i]){
        //         var a=search+" is available at index "+i+" in our bakery";
        //         break;
        //     }
        //     else{
        //         var a="we are sorry."+search+" is not available in our Bakery";
        //     }
        // }
        // d.write(a);




        // // Question no 15
        // var pass=prompt("enter password");
        // var alphabets=false;
        // var numbers=false;
        // if(pass.length<6){
        //     d.write("password should be atleast 6 character long<br>");
        //     // break;
        // }
        // if(pass[0]>=0&&pass[0]<10){
        //     d.write("Entered password:"+pass+"<br>Password can not begin with number<br>");
            
        // }
        
        //     for(var i=0;i<pass.length;i++){
        //         var charcode=pass.charCodeAt(i);
        //         if(charcode>=65&&charcode<=90||charcode>=97&&charcode<=122){
        //             alphabets=true;
        //         }
        //         else if(pass[i]>=1&&pass[i]<=9){
        //             numbers=true;
        //         }
        //     }

        

        // if(alphabets==false){
        //     d.write("password should contain some alphabets.<br>")
        // }
        // if(numbers==false){
        //     d.write("password should contain some numbers.");
        // }





        // // question no 16
        // var university="University of Karachi";
        // university=university.split("");
        // for(var i=0;i<university.length;i++){
        //     d.write(university[i]+"<br>");
        // }





        // // Question no 17
        // var userInput=prompt("enter any thing");
        // d.write("User input:"+userInput+"<br>Last character of input:"+userInput[userInput.length-1]);





        // // Question no 18
        // var text="The quick brown fox jumps over the lazy dog";
        // var splitt=text.split(" ");
        
        // var counter=0;
        // for(var i=0;i<splitt.length;i++){
        //     if(splitt[i].toLowerCase()=="the"){
        //         counter+=1;
        //     }
        // }
        // d.write("Text:"+text+"<br>There are "+counter+" occurance of word 'the'")
    
        









        // // Chapter # 26 to 30
        // // MATH METHODS




        // // Question no 1
        // var number=+prompt("enter positive integer");
        // d.write("number:"+number+"<br>round off:"+Math.round(number)+"<br>floor value:"+Math.floor(number)+"<br>ceil value:"+Math.ceil(number));





        // // Question no 2
        // var number=+prompt("enter negative integer");
        // d.write("number:"+number+"<br>round off:"+Math.round(number)+"<br>floor value:"+Math.floor(number)+"<br>ceil value:"+Math.ceil(number));




        // // Question no 3
        //var num=-4;
        // d.write("The absolute value of "+num+" is "+Math.abs(num));




        // // Question no 4
        // d.write("random dice value:"+Math.ceil(Math.random()*6));




        // // Question no 5
        // var random=Math.ceil(Math.random()*2);
        // if(random==2){
        //     d.write(random+"<br>random coin value:Heads");
        // }
        // else{
        //     d.write(random+"<br>random coin value:Tails");

        // }




        // // Question no 6
        // d.write("Random number between 1 and 100:"+Math.ceil(Math.random()*100));




        // // Question no 7
        // var weight=prompt("enter your weight in Kilograms"); 
        // d.write("The weight of user is "+parseFloat(weight)+" kilograms")




        // // Question no 8
        // var secretNumber=Math.ceil(Math.random()*10);
        // var userGuess=+prompt("Enter a number between 1 and 10.");
        // if(userGuess==secretNumber){
        //     alert("Congratulation! your guess is correct");
        // }
        // else{
        //     alert("incorrect! please try again");
        // }










        // // Chapter # 31 to 34
        // // DATE METHODS




        // // // Question no 1
        // var date=new Date();
        // d.write(date);






        // // Question no 2
        // var monthes=["January","February","March","April","May","June","July","August","September","October","November","December"]
        // var date=new Date();
        // var month=date.getMonth();
        // d.write("Curreny month:"+monthes[month]);







        // // // Question no 3
        // var date=new Date();
        // var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        // d.write("This is "+days[date.getDay()]); 





        



        // // Question no 4
        // var date=new Date();
        // var dd=date.getDay();
        // if(dd==6||dd==0){
        //     d.write("It's funday");
        // }



        // // Question no 5
        // var date =new Date();
        // var dd=date.getDate();
        // if(dd<16){
        //     d.write("First Fifteen Days of the Month");
        // }
        // else{
        //     d.write("last Days of Month");
        // }





        // // Question no 6
        // var date=new Date();
        // d.write("Current date"+date);
        // d.write("<br>Elapsed milliseconds sice January 1,1970: "+date.getTime());
        // d.write("<br>Elapsed minutes sice January 1,1970: "+date.getTime()/60000);
        






        
        // // Question no 7
        // var date=new Date();
        // d.write()
        // d.write(date.getHours()>12? "It's PM":"It's AM");






        // // Question no 8
        // var laterDate=new Date("December 31, 2020");
        // d.write("Later Date: "+laterDate);






        // // Question no 9
        // var ramDate=new Date("June 18, 2015");
        // var currDate=new Date();
        // var diff=currDate.getTime()-ramDate.getTime();
        // d.write(Math.round(diff/86400000)+" Days have passed since 1st Ramadan,2015");





        // // Question no 10
        // var fifteen=new Date("January 1, 2015");
        // var refDate=new Date("December 3, 2018");
        // var diff=refDate.getTime()-fifteen.getTime();
        // d.write("On reference date "+refDate+" ,"+diff/60000+" had passed since biggening of 2015");






        // // Question no 11
        // var date=new Date(); 
        // var gethour=date.getHours();
        // var setdate=date.setHours(gethour-1);
        // var getnewhour=date.getHours();
        // var currdate=new Date();
        // d.write("Current date:"+currdate+"<br> 1hours age, it was "+date);
        





        // // Question no 12
        // var currDate=new Date();
        // var backDate=new Date();
        // backDate.setFullYear(currDate.getFullYear()-100);
        // d.write("current date:"+currDate+"<br>100 year back,it was "+backDate);







        // // Question no 13
        // var age=+prompt("enter your age.")
        // var date=new Date();
        // var birthYear=date.getFullYear()-age;
        // d.write("Your age is "+ age +"<br>Your birthYear is "+birthYear);






        // // uestion no 14
        // var customerName=prompt("enter your name:");
        // var date=new Date();
        // var monthes=["January","February","March","April","May","June","July","August","September","October","November","December"];
        // var currMonth=monthes[date.getMonth()];
        // var Units=+prompt("enter no of units:");
        // var perUnit=+prompt("enter per unit charges");
        // var lateCharges=+prompt("enter late charges");
        // var netAmount=Units*perUnit;
        // var grossAmount=netAmount + lateCharges;
        
        // d.write("<h1>K-Electric Bill</h1>");
        // d.write("Customer Name:"+"<b>"+customerName+"</b>");
        // d.write("<br>No of Units:"+"<b>"+Units+"</b>");
        // d.write("<br>charges per Unit:"+"<b>"+perUnit+"</b>");
        // d.write("<br>Net Amount Payable (Within Due Date):"+"<b>"+netAmount+"</b>");
        // d.write("<br>Late Payment Surcharges:"+"<b>"+lateCharges+"</b>");
        // d.write("<br>Gross Amount Payable (after Due Date):"+"<b>"+grossAmount+"</b>");






        
        // // Chapter # 35 to 38
        // // FUNCTION




        // // Question no 1
        // function date(){
        //     var currDate=new Date();
        //     d.write(currDate);
        // }
        // date();





        // // Question no 2
        // function name(f_name,l_name){
        //     d.write("Good morning "+f_name+" "+l_name+" sir.");
        // }
        // name("safiullah","rafeeq");





        // // Question no 3
        // function sum(num1,num2){
        //     return num1+num2;
        // };
        // sum(2,3);





        // // Question no 4
        // function operation(num1,num2,operator){
        //     if(operator=="+"){
        //         return num1+num2;
        //     }
        //     else if(operator=="-"){
        //         return num1-num2;
        //     }
        //     else if(operator=="*"){
        //         return num1*num2;
        //     }
        //     else if(operator=="/"){
        //         return num1/num2;
        //     }
        // }
        // d.write(operation(2,3,"+"));







        // // Question no 5
        // function Square(number){
        //     return Math.pow(number,2);
        // }
        // d.write(Square(5));




        // // Question no 6
        // function factorial(number){
        //     if(number==0){
        //         return 1
        //     }
        //     else{
        //         return number * factorial(number-1);
        //     }
        // }
        
        // d.write(factorial(3));





        // // Question no 7
        // function counting(start_no,end_no){
        //     for(var i=start_no;i<=end_no;i++){
        //         d.write(i+"<br>");
        //     }
        // }
        // counting(1,99);





        // // Question no 8
        // function calculateHypotenuse(base,perp){
        //     function calculateSquare(x){
        //         return x*x;
        //     }
        //     var Hypotenuse=Math.sqrt(calculateSquare(base)+calculateSquare(perp));
        //     d.write("Hypothenuse:"+Hypotenuse);
        // }
        // calculateHypotenuse(6,8);






        // // Question no 9
        // function area(widht=19,height=20){
        //     var a=widht*height;
        //     return a;
        // }
        // d.write(area(10,10));









        // // Question no 10
        // function is_palindrome(input){
        //     var reverse=input.split("").reverse().join("");
        //     if(reverse==input){
        //         d.write("The word "+input+" is palindrome.");
        //     }
        //     else{
        //         d.write(input+" is not palindrome.");
        //     }
        // }
        // is_palindrome("madam");





        // // Question no 11
        // function titleCase(sentence){
        //     var sentence=sentence.split(" ");
        //     var arr=[];
        //     for(var i=0;i<sentence.length;i++){
        //         var a=sentence[i];
        //         arr[i]=sentence[i].replace(sentence[i][0],sentence[i][0].toUpperCase());
        //     }
        //     return arr.join(" ");
        // }
        // d.write(titleCase("the quik brown fox"));





        // // Question no 12
        //     function largest_word(str){
        //         var str=str.split(" ");
        //         word_length=str[0].length;
        //         for(var i=0;i<str.length;i++){
        //             if(str[i].length>word_length){
        //                 word_length=str[i].length;
        //                 var largest_wordd=str[i];

        //             }
        //         }
        //         return largest_wordd;
        //     }
        //     d.write(largest_word("web development corse"));





        // // Question no 13
        // function occurance(str,letter){
        //     counter=0;
        //     for(var i=0;i<str.length;i++){
        //         if(str[i]==letter){
        //             counter+=1;
        //         }
        //     }
        //     return "There are "+counter+" occurance of letter "+letter+" in string: "+str;
        // }
        // d.write(occurance("JSResourceS.com","o"));





        // // // Question no 14
        // function calcCircumference(radius){
        //     return "The circumference of circle is: "+2*Math.PI*radius;
        // }
        // function calcArea(radius){
        //     return "<br>The area of circle is: "+Math.PI*(radius**2);
        // }
        // d.write(calcCircumference(10));
        // d.write(calcArea(10));

