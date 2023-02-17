const TICKET_SEARCH_BTN = document.getElementById("ticket-search");
const FLIGHT_MODE = document.getElementById("flightMode");
const ORIGIN = document.getElementById("origin");
const DESTINATION = document.getElementById("destination");
const START_DATE = document.getElementById("startDate");
const FINISH_DATE = document.getElementById("finishDate");
const PASSENGER_NUMBER = document.getElementById("PassengerNumber");
const FLIGHT_TYPE = document.getElementById("flightType");


TICKET_SEARCH_BTN.addEventListener("click", function () {
    let params = '?'
    // if (!!ORIGIN || !!DESTINATION || !!START_DATE || !!FINISH_DATE){
    //     return;
    // }

    params += 'flightMode=' + FLIGHT_MODE.value + '&';
    params += 'origin=' + ORIGIN.value + '&';
    params += 'destination=' + DESTINATION.value + '&';
    params += 'PassengerNumber=' + PASSENGER_NUMBER.value + '&';
    params += 'startDate=' + START_DATE.value + '&';
    params += 'finishDate=' + FINISH_DATE.value + '&';
    params += 'flightType=' + FLIGHT_TYPE.value;

    console.log(params)
    window.location.href = '/tickets.html' + params;
});



function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    if (value <= 0)
        value = 1;
    target.value = value;
}


function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
}

const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
);

const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
);

decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
});

incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
});