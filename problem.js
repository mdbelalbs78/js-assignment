// problem 1
// তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে


function mindGame(numbers){
   
    const element = (numbers * 3 + 10) / 2 - 5;
    if(typeof numbers !== 'number'){
        return 'please a valid number'; // valid number check
    }
    return element;
}



// Problem 2
// তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

function evenOdd(stringNumber){

    if(typeof stringNumber !== 'string'){
        return 'please give me string';
        } // check valid input
        
    if(stringNumber.length % 2 == 0){
        return 'even'; // check even
    }
    else{
        return 'odd'; // check odd
    }
}


// Problem 3 
// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
function isLGSeven(number) {

    if(typeof number !== 'number'){
        return 'please a valid number'; // valid number check 
    }

    let element = number - 7; // difference 
    if(element < 7){
        return element;
    }
    else{
        return number * 2;
    }
}



// Problem 4 

// তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

function findingBadData(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
            if(typeof element !== 'number'){
                return 'please give valid input'; // error message check
                }
        if (element >= -0) {

            console.log('good data', element)

        } else {
            console.log('bad data', element)
            count++; // count number 
        }
       
    }
    return count;
}


// Problem 5
// তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {

    let firstFriendGems = firstFriend * 21;
    let secondFriendGems = secondFriend * 32;
    let thirdFriendGems = thirdFriend * 43;

    let totalDiomond = firstFriendGems + secondFriendGems + thirdFriendGems; // All firend gems sum

    if(typeof firstFriend !== 'number' ||typeof secondFriend !== 'number' || typeof thirdFriend !== 'number' ){
        return 'please a valid number'; // Show the error message 
    }
    if (totalDiomond >= 1000 * 2) {
        const myDiomond = totalDiomond - 2000;
        return myDiomond;
    } else {

        return totalDiomond;
    }

}







