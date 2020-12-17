function Student(firstName, midName, lastName, rollNum, email, password, phone, nationality, gender) {

    if (
        firstName && midName && lastName && rollNum
        && email && password && phone && nationality
        && gender
    ) {

        this.firstName = firstName;
        this.midName = midName;
        this.lastName = lastName;
        this.rollNum = rollNum;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.nationality = nationality;
        this.gender = gender;
        this.marks = []
        this.signupDate = new Date().getTime();

    } else {
        alert(`please provide firstName
                midName, lastName, rollNum,
                email, password, phone, 
                nationality, gender` );
        return;
    }

};

Student.prototype.getFullName = function () {
    return `${this.firstName} ${this.midName} ${this.lastName}`;
}

Student.prototype.getPercentage = function () {
    if (this.marks.length === 0) {
        return 0;
    }
    let calculatePercentage = "dfsd" // TODO: write code to calc percentage here
    return calculatePercentage
}

Student.prototype.getAvg = function () {
    if (this.marks.length === 0) {
        return 0;
    }
    let calculateAvg = "dfsd" // TODO: write code to calc Avg here
    return calculateAvg
}

Student.prototype.addMarks = function (newMark) {
    if (!newMark) {
        alert("please provide mark");
        return;
    }
    this.marks.push(newMark)
    return this.marks
}

Student.prototype.getMarks = function () {
    return this.marks
}