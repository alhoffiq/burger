$(function () {
    $(".devourBtn").on("click", function (event) {
        const id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        if ($("#burger").val()) {
            const newBurger = {
                name: $("#burger").val().trim()
            };

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("Burger added!")
                    location.reload();
                }
            );
        } else {console.log("No burger input")};

    });
});

