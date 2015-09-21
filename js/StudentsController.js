studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
    $scope.students = [];
    $scope.grads = [];
    $scope.addStudent = function() {
        $scope.students.push({
            name: $scope.studentName
        });
        $scope.studentName = null;
    };

    $scope.deleteStudent = function(student) {
        var index = $scope.students.indexOf(student);
        $scope.students.splice(index, 1);
        console.log(index);
    };

    $scope.graduateStudent = function(student) {
        $scope.grads.push(student);
        $scope.deleteStudent(student);
    };

});
