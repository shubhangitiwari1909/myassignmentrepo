import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  var app = angular.module('quizApp', []);
  title = 'angularapp';
}

 
app.directive('quiz', function(quizFactory) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'template.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
			};
 
			scope.getQuestion = function() {
			};
 
			scope.checkAnswer = function() {
			};
		}
	}
});
