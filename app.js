angular.module("Webmail", ["ngSanitize"])
.controller('WebmailCtrl', function($scope, $location) {
	//data banding = la vue se met à jour par rapport au model et inversément 
	//$scope et $location = services AngularJS
	//$scope permet d'alimenter un model
	//ng-app, ng-controller = directives
	
	$scope.dossiers = [
		{ value: "RECEPTION", label: 'Boite de réception', emails: [
			{ id: 1, from: "Albator", to: "Rudy", subject: "Je reviens", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 2, from: "Capitaine Flam", to: "Rudy", subject: "Bisous de l'espace", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
			{ id: 3, from: "Pikachu", to: "Rudy", subject: "Pika pika !", date: "15/03/2014", content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika." },
			{ id: 4, from: "Barbapapa", to: "Rudy", subject: "Hulahup Barbatruc", date: "13/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		]  }, 
		{ value: "ARCHIVES", label: "Archives", emails: [
			{ id: 5, from: "Candy", to: "Rudy", subject: "Bon anniversaire", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
			{ id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Ca va chier", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." }
		]  },
		{ value: "ENVOYES", label: "Envoyés", emails: [
			{ id: 8, from: "Rudy", to: "Albator", subject: "Bien la famille ?", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 9, from: "Rudy", to: "Capitaine Flam", subject: "Gloubiboulga Night", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		] },
		{ value: "SPAM", label: "Courrier indésirable", emails: [
			{ id: 10, from: "Rue du discount", to: "Rudy", subject: "Envie d'un nouveau frigo ?", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 11, from: "Sofinnoga", to: "Rudy", subject: "Besoin d'argent ?", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		] }
	];

	$scope.dossierCourant = null;
	$scope.emailSelectionne = null;

	$scope.versEmail = function(dossier, email){
		$location.path("/" + dossier.value + "/" + email.id);
	}

	$scope.selectionDossier = function(dossier) {
		$scope.dossierCourant = dossier; //on donne la valeur à dossierCourant en appuyant sur le dossier (voir <a>)
		$scope.emailSelectionne = null;
	}
	
	$scope.selectionEmail = function(email) {
		$scope.emailSelectionne = email; //on donne la valeur email à emailSelectionne au click plus haut
	}

	//tri
	$scope.champTri = null;
	$scope.triParExpediteur = function() {

	}

	$scope.triParDestinataire = function() {

	}

	//Pour garder le chemin de navigation
	//On va le mettre dans l'URL
	$scope.$watch(function () {
		return $location.path();
	}, function(newPath) {  //récupère le changement du 'path' (chemin)
		var tabPath = newPath.split("/"); //on récupère le path sous forme d'un tableau dont la 1ère valeur est vide
		
		if (tabPath.length > 1) {  //si la valeur est > 1, c'est qu'il y a un élément dans le tableau
			var valDossier = tabPath[1]; //La valeur du dossier est en 2e position
			$scope.dossiers.forEach(function (item) {
				if (item.value == valDossier) {  //si la valeur du dossier = ...
					$scope.selectionDossier(item); //exécute la function
				}
			});
			if (tabPath.length > 2) {  //si la valeur est > 2, c'est que l'Id d'un email est sélectionné
				var idMail = tabPath[2];
				$scope.dossierCourant.emails.forEach(function (item){
					if (item.id == idMail) {
						$scope.selectionEmail(item);
					}
				});
			}
		}
		
	});

	

})