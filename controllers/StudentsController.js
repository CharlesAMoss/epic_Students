studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;    

    // $scope.grads = [];

    // $scope.graduateStudent = function(student) {
    //     $scope.grads.push(student);
    //     $scope.deleteStudent(student);
    // };

});
