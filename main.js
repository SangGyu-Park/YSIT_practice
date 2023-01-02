var student = document.querySelector('#student');
student.onclick = () => {
    student.style.color = '#1E00D3';

    document.querySelector('#teacher').style.color='black'
}

var teacher = document.querySelector('#teacher');
teacher.onclick = () => {
    teacher.style.color = '#1E00D3';
    document.querySelector('#student').style.color='black'
}