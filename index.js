function greet(){
    alert('Hi there thank you for choosing our service!');
}

function bye(){
    alert('Oh shuks, but Hope to see you onboard next time!');
}
const b=document.getElementById('one');
const b1=document.getElementById('two');
b.addEventListener('click',greet);
b1.addEventListener('click',bye);

