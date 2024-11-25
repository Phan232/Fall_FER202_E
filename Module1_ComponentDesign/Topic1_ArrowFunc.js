//hàm mũi tên với nhiều tham số
let print = (name, age) => {
    console.log(`Name: ${name}, age: ${age}`);
};
// gọi hàm 
print("Quanh", 18);


// hàm mũi tên 1 tham số
let area = side => side * side;// return side * side
// tính diện tích hình vuông
console.log(`Area of square: ${area(5)}`);

// hàm mũi tên không có tham số 
let display = () => console.log("Hello Quanh!");
display();

// hàm trong một object literal
let student = {
    name: "Quanh",
    age: 18,
    showInfo: function () {
        console.log(`Student details: ${this.name} - ${this.age}`);
    }
};
student.showInfo();




//ham mui ten trong hoat dong su ly bat dong bo
function fetchDateFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dateResponse = "This data return from DB";
            resolve(dateResponse);
        }, 2000);
    });
}

fetchDateFromServer()
    .then(result => console.log(result))
    .catch(err => console.error(`Error: ${err.message}`))
    .finally(() => console.log("End of process"));