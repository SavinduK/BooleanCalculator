const input = document.getElementById("input")
const buttons = document.getElementById("buttons")
const deleteBtn = document.getElementById("delete")
const clearBtn = document.getElementById("clear")
const equalBtn = document.getElementById("=")
const table = document.getElementById("table")
let expression = ""
let array = [0, 0, 0, 0]
let A = 0
let B = 0
let C = 0
let D = 0


buttons.addEventListener("click", function(e) {
    let val = e.target.id
    if (val != "buttons") {
        expression += val
    }
    input.value = expression
})

deleteBtn.addEventListener("click", function(e) {
    expression = expression.substring(0, (expression.length - 1))
    input.value = expression
})

clearBtn.addEventListener("click", function(e) {
    expression = ""
    input.value = expression
})
equalBtn.addEventListener("click", function(e) {
    table.innerHTML = `
    <tr>
    <th>A</th>
    <th>B</th>
    <th>C</th>
    <th>D</th>
    <th>Solution</th>
    </tr>  
    `
    for (let j = 0; j <= 15; j++) {
        A = array[3]
        B = array[2]
        C = array[1]
        D = array[0]
        solution = eval(expression)
        if (solution == false) {
            solution = 0
        }
        if (solution == true) {
            solution = 1
        }
        //console.log(array, solution)
        let list = []
        if (!expression.includes("A")) {
            list.push(A)
        }
        if (!expression.includes("B")) {
            list.push(B)
        }
        if (!expression.includes("C")) {
            list.push(C)
        }
        if (!expression.includes("D")) {
            list.push(D)
        }
        let c = 0
            //console.log(list)
        list.forEach(item => {
            if (item != 0) {
                c = 1
            }
        })
        if (c == 0) {
            console.log(array, solution)
            let data = `
            <tr>
                <td>${A}</td>
                <td>${B}</td>
                <td>${C}</td>
                <td>${D}</td>
                <td>${solution}</td>
             </tr>
            `
            table.innerHTML += data
            document.getElementById("p").innerHTML = "Boolean Expression:- " + expression
        }

        array[3] += 1
        for (let i = 0; i <= 3; i++) {
            num = (i - 3) * -1
            if (array[num] >= 2) {
                array[num] = 0
                array[num - 1] += 1
            }
        }
    }
})