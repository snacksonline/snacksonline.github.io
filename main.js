1
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
        $("#secondView,#thirdView").toggle();
    });


    $("#onlyCart,#itemsShow").click(function() {
        if ($('#thirdView').css('display') == 'block') {
            $('#forthView,#thirdView').toggle();
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

    $("#confirmLogBtn").click(function() {
        // kolla namn och lösen
        $("#adminLog,#adminMain").toggle();
        $("#loggaIn,#loggaUt").toggle();
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

    $('#toShops').click(function() {
        $('#adminMain,#adminButik').toggle();
    });

    $('#toSnacks').click(function() {
        $('#adminMain,#adminSnacks').toggle();
    });

    $('#removeShop').click(function() {
        $('#adminMain,#shopRemoval').toggle();
    });

    $('#removeSnack').click(function() {
        $('#adminMain,#snacksRemoval').toggle();
    });

    $("#saveShop").click(function() {
        $("#adminButik,#adminMain").toggle();
    });

    $("#saveSnacks").click(function() {
        $("#adminSnacks,#adminMain").toggle();
    });

    $('#deleteSnack').click(function() {
        $('#adminMain,#snacksRemoval').toggle();
    });

    $('#deleteShop').click(function() {
        $('#adminMain,#shopRemoval').toggle();
    });

    /* AJAX functions.
     */

    // Test AJAX funktion, används som mall
    $('#testbtn').click(function() {
        $.ajax({
            type: 'GET',
            url: 'http://date.jsontest.com',
            success: function(dbStuff) {
                //    $.each(dbStuff, function(i, stuffStuff){   Använd denna sedan när du får array
                $("#theMall").append('<div class="Shop"><div class="shopItem"><p>' + dbStuff.time + '</p></div><div class="numbers"><p class="price">' + dbStuff.date + '</P><input class="quantity" type="number"><button class="add"><i class="fa fa-cart-plus" aria-hidden="true"></i></button></div></div>')
                //    });
            }
        });
    });

    // Function for displaying shops that hold checked candy
    function appendShop(urlForShops, classTag) {
        $.getJSON(urlForShops, function(shopData) {
            $('#shopTable').append('<a href="#"><div class="shop ' + classTag + '" ><h3>' + shopData.animal.name + '</h3><p>' + shopData.animal.description + '</p></div></a>');
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
