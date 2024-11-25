// từ khóa : let -. khai báobieesn trong ct
function ex1() {
    let x = 10;

    if (true) {
        let y = 20;
        x += 1;
        console.log(`x++ = ${x}`);
        console.log(`y = ${y}`);
    }
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);
}
// ex1();

// từ khóa: const -> khai báo biến trong phạm vi block-scope

function ex2() {
    let x = 10;

    if (true) {
        let y = 20;
        // x += 1;
        console.log(`x = ${x}`);
        console.log(`y = ${y}`);
    }
    console.log(`x = ${x}`);
    // console.log(`y = ${y}`);
}
ex2();