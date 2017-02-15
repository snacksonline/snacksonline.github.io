//var urlForShops = "http:mardby.se/AJK15G/animals_json.php?";
var items = 0;


$(document).ready(function() {
    fadeStuffs();
    itemsCount();

    /* Buttons for the shop progression
     */
    $("#searchBtn").click(function() {
        $("#secondView,#firstView").toggle();
    });


    $("#shopTable").on("click", ".shop", function() {
        var choosenShop = $(this).attr('id');
        console.log(choosenShop);
        $("#secondView,#thirdView").toggle();
        $.getJSON("http:mardby.se/AJK15G/animals_json.php?animalId=" + choosenShop, function(data) {
            $("#theMall").append('<div class="Shop"><div class="shopItem"><img style="width: 140px;height: 140px;border-radius:10%" src="' + data.animal.img_src + '"></div><div class="numbers"><p class="price">' + data.animal.name + '</P><input class="quantity" type="number"><button class="add"><i class="fa fa-cart-plus" aria-hidden="true"></i></button></div></div>')
        });
    });


    $("#onlyCart,#itemsShow").click(function() {
        if ($('#thirdView').css('display') == 'block') {
            $('#forthView,#thirdView').toggle();
        }
    });


    $("#confirmLogBtn").click(function() {
        // kolla namn och lösen
        $("#adminLog,#adminMain").toggle();
        $("#loggaIn,#loggaUt").toggle();
    });


    /* AJAX functions.
     */

    // "https://learnwebcode.github.io/json-example/animals-1.json" awesome url for JSON testing.

    /* Loads up shops to choose from
      todo: det kommer bli problem när man faktiskt kan ta bort shops, men vi kommer nog inte dit :)
    */
    $.getJSON("https://learnwebcode.github.io/json-example/animals-1.json", function(data) {
        for (i = 0; i < data.length; i++) {
            console.log(data[i].name);
            $(".shopShopSelect").append('<option class="shopListOfShops" value="' + data[i].name + '">' + data[i].name + '</option>');
            $("#snackShopSelector").append('<option class="snackListOfShops" value="' + data[i].name + '">' + data[i].name + '</option>');
        }
    });

    /* Fills the snacks list with the candy thats in the currently choosen shop.
     */
    $("#snackShopSelector").change(function() {
        $("#snackSelect").html('');
        var choosenName = $("#snackShopSelector option:selected").text();
        $.getJSON("https://learnwebcode.github.io/json-example/animals-1.json", function(data) {
            for (i in data) {
                if (data[i].name == choosenName) {
                    for (j = 0; j < data[i].foods.likes.length; j++) {
                        $("#snackSelect").append("<option>" + data[i].foods.likes[j] + "</option>");
                        console.log("what is goin on?");
                    }
                }
            }
        });
    });



    // Function for displaying shops that hold checked candy
    function appendShop(urlForShops, classTag) {
        $.getJSON(urlForShops, function(shopData) {
            $('#shopTable').append('<a href="#"><div id="' + shopData.animalId + '" class="shop ' + classTag + '" ><h3>' + shopData.animal.name + '</h3><p>' + shopData.animal.description + '</p></div></a>');
            console.log(shopData.animalId);
        });
    }

    // Removes unchecked snaks from the shopTable element
    function removeShopFromList(classTag) {
        $(classTag).remove();
    }


    /* Controles wich snacksare searched for, or something
        names should be self explanatory
     */
    $("#snackBox").click(function() {
        if ($('#snackBox').is(":checked")) {
            appendShop("http:mardby.se/AJK15G/animals_json.php?animalId=1", "snackTag");
        } else {
            removeShopFromList(".snackTag");
        }
    });

    $("#notBox").click(function() {
        if ($('#notBox').is(":checked")) {
            appendShop("http:mardby.se/AJK15G/animals_json.php?animalId=2", "notTag");
        } else {
            removeShopFromList(".notTag");
        }
    });


    $("#naturBox").click(function() {
        if ($('#naturBox').is(":checked")) {
            appendShop("http:mardby.se/AJK15G/animals_json.php?animalId=3", "naturTag");
        } else {
            removeShopFromList(".naturTag");
        }
    });


    $("#godisBox").click(function() {
        if ($('#godisBox').is(":checked")) {
            appendShop("http:mardby.se/AJK15G/animals_json.php?animalId=4", "godisTag");
        } else {
            removeShopFromList(".godisTag");
        }
    });


    $("#cocoBox").click(function() {
        if ($('#cocoBox').is(":checked")) {
            appendShop("http:mardby.se/AJK15G/animals_json.php?animalId=5", "cocoTag");
        } else {
            removeShopFromList(".cocoTag");
        }
    });


    $("#chipsBox").click(function() {
        if ($('#chipsBox').is(":checked")) {
            appendShop("http:mardby.se/AJK15G/animals_json.php?animalId=6", "chipsTag");
        } else {
            removeShopFromList(".chipsTag");
        }
    });

    /* All the buttons for switching between admin
      sites.
    */

    $("#loggaIn").click(function() {
        if ($('#firstView').css('display') == 'block') {
            $("#adminLog,#firstView").toggle();
        } else if ($('#secondView').css('display') == 'block') {
            $('#adminLog,#secondView').toggle();
        } else if ($('#thirdView').css('display') == 'block') {
            $('#adminLog,#thirdView').toggle();
        } else if ($('#forthView').css('display') == 'block') {
            $('#adminLog,#forthView').toggle();
        }
    });


    // Checks wich "section" the user is currently in and changes it to the main page.
    $("#loggaUt").click(function() {
        if ($("#adminMain").css('display') == 'block') {
            $('#adminMain,#firstView').toggle();
        } else if ($('#adminButik').css('display') == 'block') {
            $('#adminButik,#firstView').toggle();
        } else if ($('#adminSnacks').css('display') == 'block') {
            $('#adminSnacks,#firstView').toggle();
        } else if ($('#shopRemoval').css('display') == 'block') {
            $('#shopRemoval,#firstView').toggle();
        } else if ($('#snacksRemoval').css('display') == 'block') {
            $('#snacksRemoval,#firstView').toggle();
        }
        $('#loggaUt,#loggaIn').toggle();
    });

    $('#toShops').click(function(e) {
        e.preventDefault();
        $('#adminMain,#adminButik').toggle();
    });

    $('#toSnacks').click(function(e) {
        e.preventDefault();
        $('#adminMain,#adminSnacks').toggle();
    });

    $('#removeShop').click(function(e) {
        e.preventDefault();
        $('#adminMain,#shopRemoval').toggle();
    });

    $('#removeSnack').click(function(e) {
        e.preventDefault();
        $('#adminMain,#snacksRemoval').toggle();
    });

    $("#saveShop").click(function(e) {
        e.preventDefault();
        $("#adminButik,#adminMain").toggle();
    });

    $("#saveSnacks").click(function(e) {
        e.preventDefault();
        $("#adminSnacks,#adminMain").toggle();
    });

    $('#deleteSnack').click(function(e) {
        e.preventDefault();
        $('#adminMain,#snacksRemoval').toggle();
    });

    $('#deleteShop').click(function(e) {
        e.preventDefault();
        $('#adminMain,#shopRemoval').toggle();
    });


    /* functions for footer info
        the names should be self explanatory
     */

    $("#vanligaFragorBtn").click(function(e) {
        e.preventDefault();
        $("#vanligaFragor").toggle();
    });

    $("#kontaktBtn").click(function(e) {
        e.preventDefault();
        $("#kontakt").toggle();
    });

    $("#omOssBtn").click(function(e) {
        e.preventDefault();
        $("#omOss").toggle();
    });

    $("#jobbBtn").click(function(e) {
        e.preventDefault();
        $("#jobb").toggle();
    });

    $("#hjalpBtn").click(function(e) {
        e.preventDefault();
        $("#hjalp").toggle();
    });

    /* Just a buch of "good to have" functions.
     */

    // Functin for showing how many items is in the cart.
    function itemsCount() {
        $("#itemsShow").html(items);
    }

    // Fade to stuffs, self explanatory
    function fadeStuffs() {
        $(".hidden").fadeIn('slow', 'swing').removeClass('hidden');
    }


});
