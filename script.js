//task1

// function calcRectangleArea(width, height) {
//     try {
//         if (isNaN(width*height)) {
//             throw Error('invalid parametrs')
//         }
//         return width*height
//     } catch (error) {
//         return error
//     }
// }
// console.log(calcRectangleArea(3,4))


//task2


// let userAge=prompt('enter yours age');
// function checkAge() {
// try {
//     if (userAge==='') {
//         throw Error('The field is empty! Please enter your age');
//     } else if (isNaN(userAge)) {
//         throw Error('input is not a number');
//     } else if (userAge<14) {
//         throw Error('user is to yang');
//     } else {
//         return 'can look this film'
//     }
    
// } catch (error) {
//     return error
    
// } 
// }

// console.log(checkAge());



//task3

// class MonthException {
//     constructor(message) {
//         this.name='MonthException ' + message
//     }
        
    
// }

// function showMonthName(month) {
//     switch (month) {
//         case 1:
//             return 'Junaryy'
//         case 2:
//             return 'Feb'
    
//         default:
//             throw new MonthException('Incorrect month number')
//     }
// }
// try {
//     console.log(showMonthName(20))
// } catch (error) {
//     console.log(error.name)
// }






//task4 

// function showUser(id) {
//     if (id>=0) {
//         return {id}
//     } else {
//         throw new Error(`ID must not be negative: ${id}`)
//     }
    
// }

// function showUsers(ids) {
//     let result=[]
//     for (let i = 0; i < ids.length; i++) {
//         try {
//             result.push(showUser(ids[i]))
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//     return result
// }


// console.log(showUsers([1,2,3,4,-4]))








// console.log(Object.keys({id:1,name:'ds'}))



