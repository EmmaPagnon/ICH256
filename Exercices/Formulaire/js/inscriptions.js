$(function() {

// expression regulière :
// au moins une majuscule
// au moins une minuscule
// au moins un chiffre
// au moins un caractère spécial
// au minimum 8 caractères

    $.validator.addMethod("PWCHECK",
        function(value,element){
            if(/^(?=.*?[A-Z]{1,})(?=(.*[a-z]){1,})(?=(.*[0-9]){1,})(?=(.*[$@$!%*?&]){1,}).{8,}$/.test(value)){
                return true;
            }else{
               return false;
            };
        }
        );


    $("#inscription_form").validate(
        {
            rules: {
                nom_per: {
                    required: true,
                    minlength: 2,
                },
                prenom_per: {
                    required: true,
                    minlength: 2,
                },
                mail_per: {
                    required: true,
                    email: true,
                },
                password_per: {
                    required: true,
                    PWCHECK: true,
                },
                password_confirm_per: {
                    required: true,
                    equalTo: "#password_per"
                }
            },
            messages: {
                nom_per: {
                    required: "Votre nom est requis",
                    minlength: "Votre nom doit être composé d'au minimum 2 caractères",
                },
                prenom_per: {
                    required: "Votre prénom est requis",
                    minlength: "Votre nom doit être composé d'au minimum 2 caractères",
                },
                mail_per: {
                    required: "Votre adresse e-mail est requis",
                    email: "Votre adresse email doit avoir le format suivant : exemple@ceff.ch",
                },
                password_per: {
                    required: "Veuillez saisir votre mot de passe",
                    PWCHECK: "Veuillez saisir un mot de passe avec au minimum une majuscule, une minuscule,un chiffre, un caractère spécial et 8 caractères au minimum"
                },
                password_confirm_per: {
                    equalTo: "Mots de passe différents, veuillez ressaisir votre mot de passe",
                    required: "Veuillez confirmer votre mot de passe",
                }

            },
            submitHandler: function (form) {
                console.log("formulaire envoyé");
            }
        }

    );

});