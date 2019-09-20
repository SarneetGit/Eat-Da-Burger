// Make sure we wait to attach our handlers until the DOM is fully loaded.
$("document").ready(function() {
    // setTimeout(() => {console.log(`Loaded`)},1000)
    console.log('Loaded')
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var devour = $(this).data("devour");
  
      var consumedBurger = {
        id: id,
        devour : devour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/", {
        type: "PUT",
        data: consumedBurger
      }).then(
        function() {
          console.log("Burger has been successfully devoured.");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#createBugha").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      // event.preventDefault();
      console.log('Submission Clicked')
  
      var newBurger = {
        name: $("#bughaName").val().trim(),
      };

      if (newBurger.name === "") {
        alertify.alert().set('message', 'Please enter a valid burger name.').setHeader('Invalid Burger Name!').show();
      }
      else {
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("New Burger Created");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }
    });
  
});

  