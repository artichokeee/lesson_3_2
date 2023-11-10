function findStudentWithMaxScore(array) {
    let maxScore = -Infinity;
    let studentMaxScoreMinDate = null;

    for (let i = 0; i < array.length; i++) {
        const currentStudent = array[i];

        if (currentStudent.date !== "" && currentStudent.score !== "" && currentStudent.name !== "") {
            const currentDate = new Date(currentStudent.date);
            
            if (currentStudent.score > maxScore || (currentStudent.score === maxScore && currentDate < new Date(studentMaxScoreMinDate.date))) {
                maxScore = currentStudent.score;
                studentMaxScoreMinDate = currentStudent;
            }
        }
    }

    if (studentMaxScoreMinDate) {
        return `Поздравляю, ${studentMaxScoreMinDate.name}, с максимальным баллом за ДЗ!`;
    } else {
        return "Нет данных о студентах";
    }
}

module.exports = findStudentWithMaxScore;
