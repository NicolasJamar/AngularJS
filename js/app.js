angular.module("Webmail", ["ngSanitize"])
.controller('WebmailCtrl', function($scope, $location, $filter) {
	//data binding = la vue se met à jour par rapport au model et inversément 
	//$scope, $location, $filter = services AngularJS
		//pour utiliser un service, on doit l'ajouter en paramètre du controller
	//$scope permet d'alimenter un model
	//ng-app, ng-controller = directives
	
	$scope.dossiers = [
		{ value: "RECEPTION", label: 'Boite de réception', emails: [
			{ id: 1, from: "Albator", to: "Rudy", subject: "Je reviens", date: new Date(2014, 2, 20, 15, 30), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 2, from: "Capitaine Flam", to: "Rudy", subject: "Bisous de l'espace", date: new Date(2014, 3, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
			{ id: 3, from: "Pikachu", to: "Rudy", subject: "Pika pika !", date: new Date(2014, 2, 15, 16, 12), content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika." },
			{ id: 4, from: "Barbapapa", to: "Rudy", subject: "Hulahup Barbatruc", date: new Date(2014, 2, 15, 14, 15), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		]  }, 
		{ value: "ARCHIVES", label: "Archives", emails: [
			{ id: 5, from: "Candy", to: "Rudy", subject: "Bon anniversaire", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
			{ id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Ca va chier", date: new Date(2014, 2, 15, 17, 50), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." }
		]  },
		{ value: "ENVOYES", label: "Envoyés", emails: [
			{ id: 8, from: "Rudy", to: "Albator", subject: "Bien la famille ?", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 9, from: "Rudy", to: "Capitaine Flam", subject: "Gloubiboulga Night", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		] },
		{ value: "SPAM", label: "Courrier indésirable", emails: [
			{ id: 10, from: "Rue du discount", to: "Rudy", subject: "Envie d'un nouveau frigo ?", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 11, from: "Sofinnoga", to: "Rudy", subject: "Besoin d'argent ?", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		] }
	];

	$scope.dossierCourant = null;
	$scope.emailSelectionne = null;

	$scope.versEmail = function(dossier, email){
		$location.path("/" + dossier.value + "/" + email.id);
	}

	$scope.selectionDossier = function(dossier) {
		$scope.dossierCourant = dossier; //on donne la valeur à dossierCourant en ng-cliquant sur le dossier (voir <a>)
		$scope.emailSelectionne = null;
	}
	
	$scope.selectionEmail = function(email) {
		$scope.emailSelectionne = email; //on donne la valeur email à emailSelectionne au click plus haut
	}

	//tri
	$scope.champTri = null;
	$scope.triDescendant = false;

	$scope.triEmails = function(tri) {
		if( $scope.champTri == tri ){
			$scope.triDescendant = !$scope.triDescendant;
		} else {
			$scope.champTri = tri;
			$scope.triDescendant = false;
		}
	}

	$scope.cssChevronsTri = function (tri) {
		return { glyphicon : $scope.champTri == tri, 
                 'glyphicon-chevron-up' : $scope.champTri == tri && !$scope.triDescendant,
                 'glyphicon-chevron-down' : $scope.champTri == tri && $scope.triDescendant 
             }
    }

    //recherche
    $scope.recherche = null;
    $scope.razRecherche = function() {
    		$scope.recherche = null;
    }

    //création d'e-mails
    $scope.nouveauMail = null;

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
//création d'un filtre personnalisé s'appelant "surbrill.."
//Un filtre est une function qui va être retournée contenant un certain nombre de paramètres
//Dont le 1er est la valeur sur laquelle agi le filtre
.filter("surbrillanceRecherche", function() {
	return function(entree, recherche){
		//1. vérifier que la recherche est remplie
		if(recherche) {
			//2. si c'est le cas, remplacer par ...
			// new RegExp = expression régulière et "gi" pour dire qu'on ignore la casse
			return entree.replace(new RegExp("(" + recherche + ")", "gi" ), "<span class='surbrillanceRecherche'>$1</span>" );
		} else {
			//3. sinon, renvoyer la valeur d'entrée càd rien
			return entree;
		}
	}
});