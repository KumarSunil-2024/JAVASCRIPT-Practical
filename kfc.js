

function OrderClick() {
    document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("lblMobile").innerHTML = document.getElementById("txtMobile").value;

    var mealName = "";
    var mealCost = 0;

    var optBurger = document.getElementById("optBurger");
    var optRoller = document.getElementById("optRoller");
    var imgMeal = document.getElementById("imgMeal");

    if (optBurger.checked) {
        mealName = optBurger.value;
        mealCost = 120;
        imgMeal.src = "../public/images/omg1.png";
    }

    if (optRoller.checked) {
        mealName = optRoller.value;
        mealCost = 100;
        imgMeal.src = "../public/images/omg2.png";
    }

    var adonName = "";
    var adOnCost = 0;

    var optKrusher = document.getElementById("optKrusher");
    var optWings = document.getElementById("optWings");

    if (optKrusher.checked) {
        adonName += optKrusher.value + "<br>";
        adOnCost = 40;
        mealCost += adOnCost;
    }
    if (optWings.checked) {
        adonName += optWings.value + "<br>";
        adOnCost = 60;
        mealCost += adOnCost;
    }

    document.getElementById("lblMeal").innerHTML = mealName;
    document.getElementById("lblAdon").innerHTML = adonName;
    document.getElementById("lblTotal").innerHTML = mealCost.toLocaleString("en-in", { style: 'currency', currency: 'INR' });
}
