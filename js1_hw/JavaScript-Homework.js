//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){
    for(let i = 0; i < names.length; i++){
        console.log(names[i], (string.includes(names[i])) ? 'Matched dog_name' : 'No Matches');
    }
}

console.log(findWords(dog_string,dog_names));

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i, 1, 'even index');
        }
    }
    return arr;
}

console.log(replaceEvens(arr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


/* code wars 1:
def repeat_str(repeat, string):
    
    '''repeat a given string a given amount of times'''
    
    output = ""
    
    i = 0
    
    while i < repeat:
        output += string
        i += 1 
        
    return output
*/
function repeatStr (repeat, string){
    let output = '';
    let i = 0;

    while(i < repeat){
        output += string;
        i++;
    }
    console.log(output);
}
console.log(repeatStr(3,'hi'));

/* codewars 2
def filter_list(l):
    'return a new list with the strings filtered out'
    
    i = 0
    
    while i < len(l):
        if type(l[i]) == str:
            del(l[i])
            
        else:
            i += 1
            
    return l
*/
function filterArray(arr){
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) == 'string'){
            arr.splice(i,1);
        } 
    }
    return arr;
}

console.log(filterArray([1,2,'bye']));

let array = [1,2,3,4,'hi'];

/* codewars 3
def square_digits(num):
    output = ""
    
    num_str = str(num)
    
    placeholder = ""
    int_placeholder = 0
    
    for i in range(len(num_str)):
        placeholder = num_str[i]
        int_placeholder = int(placeholder)
        int_placeholder = int_placeholder ** 2
        output += str(int_placeholder)
    
    output = int(output)
        
    return output      
*/

// function squareDigits(num){
//     let output = '';
//     numStr = String(num);
//     let placeholder = '';
//     let intPlaceholder = 0;
//     let squareArr = [];
    
//     for(let i = 0; numStr.length; i++){
//         placeholder = numStr[i];
//         intPlaceholder = Number(placeholder);
//         squareInt = intPlaceholder ** 2;
//         squareArr.push(squareInt);
//     }
//     output = squareArr.toString();
//     return output;
// }
// console.log(squareDigits(23)); 

/* codewars 4
def open_or_senior(data):
    output = list(range(len(data)))
    
    for i in range(len(data)):
        if data[i][0] >= 55 and data[i][1] > 7:
            output[i] = "Senior"
        else:
            output[i] = "Open"
    
    return output
*/

function openOrSenior(data){
    let output = Array(data.length);

    for(let i = 0; i < data.length; i++){
        output[i] = ( (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open');
    }
    return output;
}

console.log(openOrSenior([[55,8],[23,7]]));