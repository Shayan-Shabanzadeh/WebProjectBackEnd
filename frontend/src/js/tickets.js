const TICKET_SEARCH_BTN = document.getElementById("ticket-search");
const FLIGHT_MODE = document.getElementById("flightMode");
const ORIGIN = document.getElementById("origin");
const DESTINATION = document.getElementById('destination');
const START_DATE = document.getElementById("startDate");
const FINISH_DATE = document.getElementById("finishDate");
const PASSENGER_NUMBER = document.getElementById("PassengerNumber");
const FLIGHT_TYPE = document.getElementById("flightType");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const params = Object.fromEntries(urlParams)
console.log(params);
const flightDate = reverseDate(params.startDate)
const returnDate = reverseDate(params.finishDate);
const ticketsList = document.getElementById('tickets-wrapper')
const tickets = document.getElementById('tickets-list')

function reverseDate(date) {
    let arr = date.split('/');
    arr = arr.reverse()
    let temp1 = arr[2]
    let temp2 = arr[1]
    arr[1] = temp1
    arr[2] = temp2
    return arr.join('/')
}

const data = [
    {
        id: 1,
        flightNUmber: 6907,
        origin: "IKA",
        destination: "AOR",
        company: "emirates airways",
        duration: 120,
        takeOff: 0,
        arrival: 17,
        startDate: "2023/10/06",
        finishDate: "2023/10/07",
        pricePerPerson: 650616,
        capacity: 110,
        flightType: "economy"
    },
    {
        id: 2,
        flightNUmber: 9940,
        origin: "AUH",
        destination: "ACH",
        company: "lufthansa",
        duration: 60,
        takeOff: 9,
        arrival: 8,
        startDate: "2023/12/30",
        finishDate: "2023/12/30",
        pricePerPerson: 859906,
        capacity: 23,
        flightType: "firstClass"
    },
    {
        id: 3,
        flightNUmber: 8912,
        origin: "AOR",
        destination: "ACH",
        company: "qatar airways",
        duration: 90,
        takeOff: 5,
        arrival: 9,
        startDate: "2023/07/04",
        finishDate: "2023/09/08",
        pricePerPerson: 603400,
        capacity: 67,
        flightType: "business"
    },
    {
        id: 4,
        flightNUmber: 8725,
        origin: "ACH",
        destination: "IKA",
        company: "emirates airways",
        duration: 60,
        takeOff: 20,
        arrival: 23,
        startDate: "2023/07/02",
        finishDate: "2023/11/14",
        pricePerPerson: 812216,
        capacity: 30,
        flightType: "firstClass"
    },
    {
        id: 5,
        flightNUmber: 6213,
        origin: "AUH",
        destination: "IKA",
        company: "emirates airways",
        duration: 180,
        takeOff: 23,
        arrival: 18,
        startDate: "2023/12/23",
        finishDate: "2023/12/28",
        pricePerPerson: 856745,
        capacity: 65,
        flightType: "business"
    },
    {
        id: 6,
        flightNUmber: 1362,
        origin: "ABV",
        destination: "ABV",
        company: "turkish airline",
        duration: 180,
        takeOff: 4,
        arrival: 21,
        startDate: "2023/08/14",
        finishDate: "2023/11/23",
        pricePerPerson: 782465,
        capacity: 85,
        flightType: "firstClass"
    },
    {
        id: 7,
        flightNUmber: 8197,
        origin: "ACH",
        destination: "AOR",
        company: "emirates airways",
        duration: 90,
        takeOff: 12,
        arrival: 19,
        startDate: "2023/09/27",
        finishDate: "2023/11/24",
        pricePerPerson: 882474,
        capacity: 29,
        flightType: "business"
    },
    {
        id: 8,
        flightNUmber: 5809,
        origin: "ACH",
        destination: "AUH",
        company: "qatar airways",
        duration: 180,
        takeOff: 14,
        arrival: 23,
        startDate: "2023/11/26",
        finishDate: "2023/12/27",
        pricePerPerson: 981735,
        capacity: 69,
        flightType: "economy"
    },
    {
        id: 9,
        flightNUmber: 9840,
        origin: "AOR",
        destination: "AUH",
        company: "emirates airways",
        duration: 90,
        takeOff: 1,
        arrival: 20,
        startDate: "2023/06/28",
        finishDate: "2023/08/27",
        pricePerPerson: 750123,
        capacity: 107,
        flightType: "economy"
    },
    {
        id: 10,
        flightNUmber: 6129,
        origin: "ABV",
        destination: "ABV",
        company: "qatar airways",
        duration: 180,
        takeOff: 11,
        arrival: 15,
        startDate: "2023/10/07",
        finishDate: "2023/12/07",
        pricePerPerson: 951301,
        capacity: 75,
        flightType: "firstClass"
    },
    {
        id: 11,
        flightNUmber: 6580,
        origin: "ACH",
        destination: "IKA",
        company: "turkish airline",
        duration: 120,
        takeOff: 1,
        arrival: 9,
        startDate: "2023/09/27",
        finishDate: "2023/12/28",
        pricePerPerson: 940346,
        capacity: 51,
        flightType: "economy"
    },
    {
        id: 12,
        flightNUmber: 8650,
        origin: "ACH",
        destination: "ABV",
        company: "qatar airways",
        duration: 90,
        takeOff: 0,
        arrival: 23,
        startDate: "2023/08/12",
        finishDate: "2023/10/01",
        pricePerPerson: 737910,
        capacity: 96,
        flightType: "firstClass"
    },
    {
        id: 13,
        flightNUmber: 7984,
        origin: "AUH",
        destination: "ABV",
        company: "emirates airways",
        duration: 120,
        takeOff: 18,
        arrival: 12,
        startDate: "2023/04/29",
        finishDate: "2023/10/29",
        pricePerPerson: 717080,
        capacity: 42,
        flightType: "business"
    },
    {
        id: 14,
        flightNUmber: 1783,
        origin: "AOR",
        destination: "ACH",
        company: "emirates airways",
        duration: 180,
        takeOff: 2,
        arrival: 15,
        startDate: "2023/11/13",
        finishDate: "2023/12/18",
        pricePerPerson: 611900,
        capacity: 67,
        flightType: "firstClass"
    },
    {
        id: 15,
        flightNUmber: 9059,
        origin: "IKA",
        destination: "IKA",
        company: "qatar airways",
        duration: 90,
        takeOff: 3,
        arrival: 18,
        startDate: "2023/03/11",
        finishDate: "2023/09/22",
        pricePerPerson: 865651,
        capacity: 25,
        flightType: "business"
    },
    {
        id: 16,
        flightNUmber: 3826,
        origin: "AOR",
        destination: "ACH",
        company: "qatar airways",
        duration: 60,
        takeOff: 0,
        arrival: 2,
        startDate: "2023/09/15",
        finishDate: "2023/09/18",
        pricePerPerson: 631722,
        capacity: 62,
        flightType: "firstClass"
    },
    {
        id: 17,
        flightNUmber: 7913,
        origin: "AOR",
        destination: "ACH",
        company: "lufthansa",
        duration: 180,
        takeOff: 1,
        arrival: 1,
        startDate: "2023/04/14",
        finishDate: "2023/10/10",
        pricePerPerson: 721766,
        capacity: 37,
        flightType: "business"
    },
    {
        id: 18,
        flightNUmber: 1538,
        origin: "AOR",
        destination: "IKA",
        company: "lufthansa",
        duration: 120,
        takeOff: 17,
        arrival: 12,
        startDate: "2023/05/18",
        finishDate: "2023/12/12",
        pricePerPerson: 965395,
        capacity: 74,
        flightType: "economy"
    },
    {
        id: 19,
        flightNUmber: 7308,
        origin: "ACH",
        destination: "AOR",
        company: "emirates airways",
        duration: 120,
        takeOff: 9,
        arrival: 12,
        startDate: "2023/11/17",
        finishDate: "2023/11/19",
        pricePerPerson: 851006,
        capacity: 21,
        flightType: "firstClass"
    },
    {
        id: 20,
        flightNUmber: 7904,
        origin: "ACH",
        destination: "AUH",
        company: "emirates airways",
        duration: 90,
        takeOff: 17,
        arrival: 6,
        startDate: "2023/10/09",
        finishDate: "2023/10/18",
        pricePerPerson: 668659,
        capacity: 77,
        flightType: "firstClass"
    },
    {
        id: 21,
        flightNUmber: 7377,
        origin: "AUH",
        destination: "AOR",
        company: "qatar airways",
        duration: 180,
        takeOff: 5,
        arrival: 10,
        startDate: "2023/12/28",
        finishDate: "2023/12/28",
        pricePerPerson: 759476,
        capacity: 51,
        flightType: "firstClass"
    },
    {
        id: 22,
        flightNUmber: 3376,
        origin: "AUH",
        destination: "ACH",
        company: "lufthansa",
        duration: 60,
        takeOff: 9,
        arrival: 16,
        startDate: "2023/08/11",
        finishDate: "2023/10/26",
        pricePerPerson: 943040,
        capacity: 36,
        flightType: "firstClass"
    },
    {
        id: 23,
        flightNUmber: 8900,
        origin: "AOR",
        destination: "ACH",
        company: "qatar airways",
        duration: 180,
        takeOff: 19,
        arrival: 6,
        startDate: "2023/01/25",
        finishDate: "2023/04/23",
        pricePerPerson: 883526,
        capacity: 41,
        flightType: "business"
    },
    {
        id: 24,
        flightNUmber: 5112,
        origin: "AUH",
        destination: "IKA",
        company: "qatar airways",
        duration: 180,
        takeOff: 23,
        arrival: 12,
        startDate: "2023/05/21",
        finishDate: "2023/08/07",
        pricePerPerson: 633201,
        capacity: 67,
        flightType: "economy"
    },
    {
        id: 25,
        flightNUmber: 8846,
        origin: "AUH",
        destination: "IKA",
        company: "emirates airways",
        duration: 120,
        takeOff: 2,
        arrival: 23,
        startDate: "2023/01/26",
        finishDate: "2023/10/10",
        pricePerPerson: 768055,
        capacity: 106,
        flightType: "economy"
    },
    {
        id: 26,
        flightNUmber: 7911,
        origin: "ABV",
        destination: "IKA",
        company: "qatar airways",
        duration: 60,
        takeOff: 22,
        arrival: 9,
        startDate: "2023/11/27",
        finishDate: "2023/12/10",
        pricePerPerson: 906160,
        capacity: 50,
        flightType: "business"
    },
    {
        id: 27,
        flightNUmber: 2690,
        origin: "ABV",
        destination: "ACH",
        company: "qatar airways",
        duration: 90,
        takeOff: 6,
        arrival: 7,
        startDate: "2023/02/23",
        finishDate: "2023/03/25",
        pricePerPerson: 611875,
        capacity: 75,
        flightType: "business"
    },
    {
        id: 28,
        flightNUmber: 2821,
        origin: "AOR",
        destination: "ACH",
        company: "qatar airways",
        duration: 120,
        takeOff: 4,
        arrival: 14,
        startDate: "2023/02/12",
        finishDate: "2023/06/01",
        pricePerPerson: 785359,
        capacity: 52,
        flightType: "business"
    },
    {
        id: 29,
        flightNUmber: 9545,
        origin: "ACH",
        destination: "AUH",
        company: "turkish airline",
        duration: 180,
        takeOff: 5,
        arrival: 11,
        startDate: "2023/07/10",
        finishDate: "2023/10/11",
        pricePerPerson: 995546,
        capacity: 61,
        flightType: "business"
    },
    {
        id: 30,
        flightNUmber: 8225,
        origin: "AUH",
        destination: "IKA",
        company: "qatar airways",
        duration: 60,
        takeOff: 8,
        arrival: 3,
        startDate: "2023/06/05",
        finishDate: "2023/08/17",
        pricePerPerson: 643326,
        capacity: 91,
        flightType: "business"
    },
    {
        id: 31,
        flightNUmber: 7359,
        origin: "ACH",
        destination: "AUH",
        company: "lufthansa",
        duration: 90,
        takeOff: 4,
        arrival: 12,
        startDate: "2023/10/16",
        finishDate: "2023/10/21",
        pricePerPerson: 908454,
        capacity: 50,
        flightType: "firstClass"
    },
    {
        id: 32,
        flightNUmber: 7458,
        origin: "AUH",
        destination: "IKA",
        company: "lufthansa",
        duration: 60,
        takeOff: 6,
        arrival: 14,
        startDate: "2023/04/18",
        finishDate: "2023/08/26",
        pricePerPerson: 914151,
        capacity: 94,
        flightType: "business"
    },
    {
        id: 33,
        flightNUmber: 2649,
        origin: "IKA",
        destination: "IKA",
        company: "lufthansa",
        duration: 90,
        takeOff: 20,
        arrival: 12,
        startDate: "2023/01/31",
        finishDate: "2023/07/16",
        pricePerPerson: 657960,
        capacity: 66,
        flightType: "economy"
    },
    {
        id: 34,
        flightNUmber: 5681,
        origin: "AOR",
        destination: "ABV",
        company: "turkish airline",
        duration: 90,
        takeOff: 17,
        arrival: 15,
        startDate: "2023/05/24",
        finishDate: "2023/09/12",
        pricePerPerson: 885608,
        capacity: 106,
        flightType: "economy"
    },
    {
        id: 35,
        flightNUmber: 9563,
        origin: "IKA",
        destination: "ABV",
        company: "turkish airline",
        duration: 60,
        takeOff: 1,
        arrival: 6,
        startDate: "2023/02/23",
        finishDate: "2023/02/28",
        pricePerPerson: 647326,
        capacity: 59,
        flightType: "economy"
    },
    {
        id: 36,
        flightNUmber: 7111,
        origin: "ACH",
        destination: "ACH",
        company: "lufthansa",
        duration: 90,
        takeOff: 0,
        arrival: 1,
        startDate: "2023/08/07",
        finishDate: "2023/10/20",
        pricePerPerson: 915702,
        capacity: 35,
        flightType: "economy"
    },
    {
        id: 37,
        flightNUmber: 8337,
        origin: "ACH",
        destination: "IKA",
        company: "lufthansa",
        duration: 180,
        takeOff: 12,
        arrival: 17,
        startDate: "2023/08/13",
        finishDate: "2023/09/28",
        pricePerPerson: 666414,
        capacity: 35,
        flightType: "economy"
    },
    {
        id: 38,
        flightNUmber: 3819,
        origin: "IKA",
        destination: "AOR",
        company: "qatar airways",
        duration: 180,
        takeOff: 14,
        arrival: 8,
        startDate: "2023/10/07",
        finishDate: "2023/11/17",
        pricePerPerson: 914562,
        capacity: 20,
        flightType: "business"
    },
    {
        id: 39,
        flightNUmber: 7627,
        origin: "ACH",
        destination: "ABV",
        company: "lufthansa",
        duration: 120,
        takeOff: 15,
        arrival: 17,
        startDate: "2023/03/05",
        finishDate: "2023/05/17",
        pricePerPerson: 740722,
        capacity: 94,
        flightType: "firstClass"
    },
    {
        id: 40,
        flightNUmber: 8467,
        origin: "AUH",
        destination: "AUH",
        company: "lufthansa",
        duration: 90,
        takeOff: 2,
        arrival: 22,
        startDate: "2023/10/30",
        finishDate: "2023/12/18",
        pricePerPerson: 852126,
        capacity: 92,
        flightType: "firstClass"
    },
    {
        id: 41,
        flightNUmber: 6293,
        origin: "AUH",
        destination: "AUH",
        company: "emirates airways",
        duration: 180,
        takeOff: 21,
        arrival: 23,
        startDate: "2023/04/24",
        finishDate: "2023/12/27",
        pricePerPerson: 992007,
        capacity: 64,
        flightType: "firstClass"
    },
    {
        id: 42,
        flightNUmber: 9220,
        origin: "IKA",
        destination: "AUH",
        company: "qatar airways",
        duration: 90,
        takeOff: 16,
        arrival: 4,
        startDate: "2023/05/22",
        finishDate: "2023/12/12",
        pricePerPerson: 932574,
        capacity: 55,
        flightType: "business"
    },
    {
        id: 43,
        flightNUmber: 2614,
        origin: "AOR",
        destination: "ACH",
        company: "turkish airline",
        duration: 180,
        takeOff: 13,
        arrival: 1,
        startDate: "2023/07/27",
        finishDate: "2023/12/13",
        pricePerPerson: 751822,
        capacity: 67,
        flightType: "firstClass"
    },
    {
        id: 44,
        flightNUmber: 2148,
        origin: "IKA",
        destination: "IKA",
        company: "qatar airways",
        duration: 90,
        takeOff: 23,
        arrival: 22,
        startDate: "2023/11/07",
        finishDate: "2023/12/18",
        pricePerPerson: 904181,
        capacity: 56,
        flightType: "economy"
    },
    {
        id: 45,
        flightNUmber: 7032,
        origin: "ABV",
        destination: "ABV",
        company: "emirates airways",
        duration: 120,
        takeOff: 10,
        arrival: 16,
        startDate: "2023/12/14",
        finishDate: "2023/12/24",
        pricePerPerson: 882203,
        capacity: 101,
        flightType: "business"
    },
    {
        id: 46,
        flightNUmber: 5762,
        origin: "ACH",
        destination: "ACH",
        company: "turkish airline",
        duration: 120,
        takeOff: 0,
        arrival: 9,
        startDate: "2023/07/12",
        finishDate: "2023/07/20",
        pricePerPerson: 863527,
        capacity: 30,
        flightType: "firstClass"
    },
    {
        id: 47,
        flightNUmber: 8264,
        origin: "AOR",
        destination: "ABV",
        company: "lufthansa",
        duration: 180,
        takeOff: 3,
        arrival: 18,
        startDate: "2023/04/07",
        finishDate: "2023/05/21",
        pricePerPerson: 686210,
        capacity: 42,
        flightType: "economy"
    },
    {
        id: 48,
        flightNUmber: 1768,
        origin: "ACH",
        destination: "IKA",
        company: "qatar airways",
        duration: 60,
        takeOff: 19,
        arrival: 20,
        startDate: "2023/02/06",
        finishDate: "2023/11/28",
        pricePerPerson: 928168,
        capacity: 77,
        flightType: "business"
    },
    {
        id: 49,
        flightNUmber: 6724,
        origin: "IKA",
        destination: "AUH",
        company: "lufthansa",
        duration: 90,
        takeOff: 13,
        arrival: 23,
        startDate: "2023/03/19",
        finishDate: "2023/07/27",
        pricePerPerson: 780928,
        capacity: 42,
        flightType: "economy"
    },
    {
        id: 50,
        flightNUmber: 5109,
        origin: "ABV",
        destination: "ACH",
        company: "turkish airline",
        duration: 180,
        takeOff: 18,
        arrival: 22,
        startDate: "2023/03/23",
        finishDate: "2023/04/12",
        pricePerPerson: 922774,
        capacity: 97,
        flightType: "economy"
    },
    {
        id: 51,
        flightNUmber: 5034,
        origin: "AOR",
        destination: "ABV",
        company: "lufthansa",
        duration: 60,
        takeOff: 15,
        arrival: 17,
        startDate: "2023/02/19",
        finishDate: "2023/03/25",
        pricePerPerson: 765498,
        capacity: 67,
        flightType: "firstClass"
    },
    {
        id: 52,
        flightNUmber: 8196,
        origin: "AOR",
        destination: "AUH",
        company: "turkish airline",
        duration: 60,
        takeOff: 6,
        arrival: 7,
        startDate: "2023/10/05",
        finishDate: "2023/11/07",
        pricePerPerson: 872572,
        capacity: 98,
        flightType: "business"
    },
    {
        id: 53,
        flightNUmber: 7917,
        origin: "ACH",
        destination: "AUH",
        company: "lufthansa",
        duration: 60,
        takeOff: 22,
        arrival: 5,
        startDate: "2023/10/12",
        finishDate: "2023/11/22",
        pricePerPerson: 610330,
        capacity: 26,
        flightType: "firstClass"
    },
    {
        id: 54,
        flightNUmber: 3295,
        origin: "IKA",
        destination: "AOR",
        company: "lufthansa",
        duration: 180,
        takeOff: 17,
        arrival: 17,
        startDate: "2023/05/11",
        finishDate: "2023/07/07",
        pricePerPerson: 748721,
        capacity: 56,
        flightType: "economy"
    },
    {
        id: 55,
        flightNUmber: 6632,
        origin: "ABV",
        destination: "ACH",
        company: "turkish airline",
        duration: 60,
        takeOff: 13,
        arrival: 18,
        startDate: "2023/11/17",
        finishDate: "2023/12/12",
        pricePerPerson: 658083,
        capacity: 90,
        flightType: "business"
    },
    {
        id: 56,
        flightNUmber: 5164,
        origin: "IKA",
        destination: "ACH",
        company: "turkish airline",
        duration: 60,
        takeOff: 5,
        arrival: 6,
        startDate: "2023/04/08",
        finishDate: "2023/05/20",
        pricePerPerson: 732368,
        capacity: 106,
        flightType: "economy"
    },
    {
        id: 57,
        flightNUmber: 8515,
        origin: "AOR",
        destination: "ACH",
        company: "turkish airline",
        duration: 90,
        takeOff: 21,
        arrival: 23,
        startDate: "2023/02/15",
        finishDate: "2023/02/23",
        pricePerPerson: 754115,
        capacity: 97,
        flightType: "business"
    },
    {
        id: 58,
        flightNUmber: 4018,
        origin: "IKA",
        destination: "AUH",
        company: "emirates airways",
        duration: 60,
        takeOff: 4,
        arrival: 18,
        startDate: "2023/09/14",
        finishDate: "2023/09/19",
        pricePerPerson: 786085,
        capacity: 24,
        flightType: "economy"
    },
    {
        id: 59,
        flightNUmber: 2681,
        origin: "ACH",
        destination: "IKA",
        company: "lufthansa",
        duration: 180,
        takeOff: 19,
        arrival: 3,
        startDate: "2023/11/24",
        finishDate: "2023/12/11",
        pricePerPerson: 653394,
        capacity: 87,
        flightType: "economy"
    },
    {
        id: 60,
        flightNUmber: 9902,
        origin: "ACH",
        destination: "AUH",
        company: "lufthansa",
        duration: 90,
        takeOff: 23,
        arrival: 17,
        startDate: "2023/08/25",
        finishDate: "2023/09/26",
        pricePerPerson: 900302,
        capacity: 56,
        flightType: "business"
    },
    {
        id: 61,
        flightNUmber: 1385,
        origin: "AOR",
        destination: "AUH",
        company: "lufthansa",
        duration: 90,
        takeOff: 4,
        arrival: 13,
        startDate: "2023/05/12",
        finishDate: "2023/10/26",
        pricePerPerson: 886950,
        capacity: 35,
        flightType: "firstClass"
    },
    {
        id: 62,
        flightNUmber: 9103,
        origin: "ACH",
        destination: "AOR",
        company: "turkish airline",
        duration: 180,
        takeOff: 1,
        arrival: 8,
        startDate: "2023/11/26",
        finishDate: "2023/12/20",
        pricePerPerson: 974940,
        capacity: 78,
        flightType: "business"
    },
    {
        id: 63,
        flightNUmber: 9781,
        origin: "ACH",
        destination: "ABV",
        company: "emirates airways",
        duration: 60,
        takeOff: 23,
        arrival: 0,
        startDate: "2023/05/29",
        finishDate: "2023/11/20",
        pricePerPerson: 675364,
        capacity: 76,
        flightType: "firstClass"
    },
    {
        id: 64,
        flightNUmber: 6124,
        origin: "AUH",
        destination: "IKA",
        company: "emirates airways",
        duration: 90,
        takeOff: 13,
        arrival: 19,
        startDate: "2023/08/24",
        finishDate: "2023/10/31",
        pricePerPerson: 748109,
        capacity: 80,
        flightType: "firstClass"
    },
    {
        id: 65,
        flightNUmber: 8778,
        origin: "AUH",
        destination: "ABV",
        company: "emirates airways",
        duration: 90,
        takeOff: 10,
        arrival: 14,
        startDate: "2023/06/15",
        finishDate: "2023/09/17",
        pricePerPerson: 962455,
        capacity: 61,
        flightType: "economy"
    },
    {
        id: 66,
        flightNUmber: 8843,
        origin: "AUH",
        destination: "AUH",
        company: "lufthansa",
        duration: 90,
        takeOff: 9,
        arrival: 19,
        startDate: "2023/02/04",
        finishDate: "2023/10/26",
        pricePerPerson: 928285,
        capacity: 36,
        flightType: "business"
    },
    {
        id: 67,
        flightNUmber: 5238,
        origin: "ABV",
        destination: "AOR",
        company: "lufthansa",
        duration: 90,
        takeOff: 0,
        arrival: 4,
        startDate: "2023/10/02",
        finishDate: "2023/11/01",
        pricePerPerson: 752569,
        capacity: 74,
        flightType: "economy"
    },
    {
        id: 68,
        flightNUmber: 6052,
        origin: "AUH",
        destination: "AUH",
        company: "qatar airways",
        duration: 90,
        takeOff: 22,
        arrival: 5,
        startDate: "2023/05/05",
        finishDate: "2023/10/18",
        pricePerPerson: 758947,
        capacity: 26,
        flightType: "business"
    },
    {
        id: 69,
        flightNUmber: 7361,
        origin: "AUH",
        destination: "AUH",
        company: "lufthansa",
        duration: 90,
        takeOff: 21,
        arrival: 23,
        startDate: "2023/02/19",
        finishDate: "2023/11/10",
        pricePerPerson: 752483,
        capacity: 56,
        flightType: "firstClass"
    },
    {
        id: 70,
        flightNUmber: 8619,
        origin: "AOR",
        destination: "ABV",
        company: "turkish airline",
        duration: 60,
        takeOff: 9,
        arrival: 0,
        startDate: "2023/12/11",
        finishDate: "2023/12/16",
        pricePerPerson: 988172,
        capacity: 54,
        flightType: "economy"
    },
    {
        id: 71,
        flightNUmber: 7844,
        origin: "ACH",
        destination: "AUH",
        company: "turkish airline",
        duration: 90,
        takeOff: 14,
        arrival: 0,
        startDate: "2023/03/13",
        finishDate: "2023/11/16",
        pricePerPerson: 975216,
        capacity: 53,
        flightType: "business"
    },
    {
        id: 72,
        flightNUmber: 7514,
        origin: "ABV",
        destination: "AOR",
        company: "emirates airways",
        duration: 120,
        takeOff: 15,
        arrival: 15,
        startDate: "2023/12/19",
        finishDate: "2023/12/28",
        pricePerPerson: 825243,
        capacity: 76,
        flightType: "firstClass"
    },
    {
        id: 73,
        flightNUmber: 6953,
        origin: "IKA",
        destination: "IKA",
        company: "lufthansa",
        duration: 90,
        takeOff: 10,
        arrival: 18,
        startDate: "2023/05/23",
        finishDate: "2023/05/26",
        pricePerPerson: 693038,
        capacity: 38,
        flightType: "economy"
    },
    {
        id: 74,
        flightNUmber: 2045,
        origin: "AUH",
        destination: "AOR",
        company: "lufthansa",
        duration: 180,
        takeOff: 8,
        arrival: 17,
        startDate: "2023/09/01",
        finishDate: "2023/11/13",
        pricePerPerson: 757987,
        capacity: 73,
        flightType: "business"
    },
    {
        id: 75,
        flightNUmber: 7184,
        origin: "ACH",
        destination: "IKA",
        company: "lufthansa",
        duration: 180,
        takeOff: 5,
        arrival: 0,
        startDate: "2023/05/07",
        finishDate: "2023/07/21",
        pricePerPerson: 974020,
        capacity: 68,
        flightType: "firstClass"
    },
    {
        id: 76,
        flightNUmber: 6073,
        origin: "AOR",
        destination: "ABV",
        company: "lufthansa",
        duration: 180,
        takeOff: 4,
        arrival: 2,
        startDate: "2023/01/25",
        finishDate: "2023/04/27",
        pricePerPerson: 813573,
        capacity: 70,
        flightType: "economy"
    },
    {
        id: 77,
        flightNUmber: 4065,
        origin: "IKA",
        destination: "ABV",
        company: "lufthansa",
        duration: 90,
        takeOff: 0,
        arrival: 8,
        startDate: "2023/12/15",
        finishDate: "2023/12/25",
        pricePerPerson: 898818,
        capacity: 61,
        flightType: "economy"
    },
    {
        id: 78,
        flightNUmber: 9130,
        origin: "AOR",
        destination: "ABV",
        company: "emirates airways",
        duration: 90,
        takeOff: 23,
        arrival: 3,
        startDate: "2023/03/20",
        finishDate: "2023/08/11",
        pricePerPerson: 940242,
        capacity: 89,
        flightType: "firstClass"
    },
    {
        id: 79,
        flightNUmber: 1578,
        origin: "AUH",
        destination: "IKA",
        company: "emirates airways",
        duration: 90,
        takeOff: 13,
        arrival: 7,
        startDate: "2023/06/16",
        finishDate: "2023/09/12",
        pricePerPerson: 815560,
        capacity: 59,
        flightType: "business"
    },
    {
        id: 80,
        flightNUmber: 2232,
        origin: "IKA",
        destination: "AUH",
        company: "lufthansa",
        duration: 180,
        takeOff: 2,
        arrival: 23,
        startDate: "2023/12/03",
        finishDate: "2023/12/25",
        pricePerPerson: 625440,
        capacity: 43,
        flightType: "economy"
    },
    {
        id: 81,
        flightNUmber: 3069,
        origin: "AUH",
        destination: "ABV",
        company: "turkish airline",
        duration: 180,
        takeOff: 2,
        arrival: 18,
        startDate: "2023/11/10",
        finishDate: "2023/12/15",
        pricePerPerson: 975545,
        capacity: 33,
        flightType: "firstClass"
    },
    {
        id: 82,
        flightNUmber: 9168,
        origin: "AOR",
        destination: "ACH",
        company: "qatar airways",
        duration: 120,
        takeOff: 1,
        arrival: 3,
        startDate: "2023/08/07",
        finishDate: "2023/11/03",
        pricePerPerson: 905694,
        capacity: 90,
        flightType: "firstClass"
    },
    {
        id: 83,
        flightNUmber: 8145,
        origin: "AOR",
        destination: "AOR",
        company: "emirates airways",
        duration: 60,
        takeOff: 22,
        arrival: 9,
        startDate: "2023/10/01",
        finishDate: "2023/11/14",
        pricePerPerson: 655813,
        capacity: 73,
        flightType: "economy"
    },
    {
        id: 84,
        flightNUmber: 9082,
        origin: "ACH",
        destination: "AOR",
        company: "turkish airline",
        duration: 180,
        takeOff: 21,
        arrival: 11,
        startDate: "2023/05/10",
        finishDate: "2023/07/17",
        pricePerPerson: 862027,
        capacity: 106,
        flightType: "economy"
    },
    {
        id: 85,
        flightNUmber: 5644,
        origin: "IKA",
        destination: "AOR",
        company: "lufthansa",
        duration: 90,
        takeOff: 22,
        arrival: 14,
        startDate: "2023/06/22",
        finishDate: "2023/12/03",
        pricePerPerson: 967757,
        capacity: 65,
        flightType: "firstClass"
    },
    {
        id: 86,
        flightNUmber: 3121,
        origin: "ABV",
        destination: "AOR",
        company: "qatar airways",
        duration: 120,
        takeOff: 16,
        arrival: 9,
        startDate: "2023/08/19",
        finishDate: "2023/10/06",
        pricePerPerson: 644807,
        capacity: 47,
        flightType: "economy"
    },
    {
        id: 87,
        flightNUmber: 8726,
        origin: "AUH",
        destination: "ACH",
        company: "qatar airways",
        duration: 120,
        takeOff: 3,
        arrival: 20,
        startDate: "2023/03/15",
        finishDate: "2023/09/25",
        pricePerPerson: 731112,
        capacity: 25,
        flightType: "business"
    },
    {
        id: 88,
        flightNUmber: 3867,
        origin: "AUH",
        destination: "ACH",
        company: "qatar airways",
        duration: 180,
        takeOff: 17,
        arrival: 18,
        startDate: "2023/09/24",
        finishDate: "2023/11/04",
        pricePerPerson: 686668,
        capacity: 63,
        flightType: "economy"
    },
    {
        id: 89,
        flightNUmber: 5147,
        origin: "ABV",
        destination: "ACH",
        company: "emirates airways",
        duration: 120,
        takeOff: 15,
        arrival: 17,
        startDate: "2023/02/07",
        finishDate: "2023/10/19",
        pricePerPerson: 896724,
        capacity: 53,
        flightType: "firstClass"
    },
    {
        id: 90,
        flightNUmber: 9860,
        origin: "ACH",
        destination: "IKA",
        company: "qatar airways",
        duration: 120,
        takeOff: 23,
        arrival: 6,
        startDate: "2023/02/07",
        finishDate: "2023/10/27",
        pricePerPerson: 638040,
        capacity: 20,
        flightType: "firstClass"
    },
    {
        id: 91,
        flightNUmber: 9020,
        origin: "AUH",
        destination: "IKA",
        company: "turkish airline",
        duration: 180,
        takeOff: 20,
        arrival: 8,
        startDate: "2023/08/19",
        finishDate: "2023/08/23",
        pricePerPerson: 716274,
        capacity: 90,
        flightType: "business"
    },
    {
        id: 92,
        flightNUmber: 3853,
        origin: "AOR",
        destination: "ACH",
        company: "lufthansa",
        duration: 120,
        takeOff: 2,
        arrival: 6,
        startDate: "2023/11/01",
        finishDate: "2023/12/27",
        pricePerPerson: 761880,
        capacity: 99,
        flightType: "economy"
    },
    {
        id: 93,
        flightNUmber: 3225,
        origin: "ABV",
        destination: "AUH",
        company: "qatar airways",
        duration: 120,
        takeOff: 21,
        arrival: 5,
        startDate: "2023/07/03",
        finishDate: "2023/09/05",
        pricePerPerson: 920872,
        capacity: 105,
        flightType: "business"
    },
    {
        id: 94,
        flightNUmber: 8548,
        origin: "AOR",
        destination: "AOR",
        company: "qatar airways",
        duration: 180,
        takeOff: 4,
        arrival: 8,
        startDate: "2023/04/06",
        finishDate: "2023/05/01",
        pricePerPerson: 995745,
        capacity: 60,
        flightType: "business"
    },
    {
        id: 95,
        flightNUmber: 2661,
        origin: "AUH",
        destination: "AOR",
        company: "lufthansa",
        duration: 180,
        takeOff: 7,
        arrival: 14,
        startDate: "2023/01/28",
        finishDate: "2023/11/12",
        pricePerPerson: 690210,
        capacity: 92,
        flightType: "economy"
    },
    {
        id: 96,
        flightNUmber: 9934,
        origin: "AUH",
        destination: "AOR",
        company: "lufthansa",
        duration: 120,
        takeOff: 7,
        arrival: 21,
        startDate: "2023/07/31",
        finishDate: "2023/09/28",
        pricePerPerson: 924310,
        capacity: 61,
        flightType: "firstClass"
    },
    {
        id: 97,
        flightNUmber: 7191,
        origin: "ACH",
        destination: "AUH",
        company: "turkish airline",
        duration: 90,
        takeOff: 14,
        arrival: 19,
        startDate: "2023/03/05",
        finishDate: "2023/09/12",
        pricePerPerson: 812429,
        capacity: 108,
        flightType: "business"
    },
    {
        id: 98,
        flightNUmber: 7370,
        origin: "ACH",
        destination: "AOR",
        company: "qatar airways",
        duration: 120,
        takeOff: 16,
        arrival: 12,
        startDate: "2023/08/19",
        finishDate: "2023/11/14",
        pricePerPerson: 606039,
        capacity: 53,
        flightType: "economy"
    },
    {
        id: 99,
        flightNUmber: 2783,
        origin: "IKA",
        destination: "AUH",
        company: "emirates airways",
        duration: 90,
        takeOff: 13,
        arrival: 2,
        startDate: "2023/12/22",
        finishDate: "2023/12/24",
        pricePerPerson: 879722,
        capacity: 63,
        flightType: "firstClass"
    },
    {
        id: 100,
        flightNUmber: 4149,
        origin: "ACH",
        destination: "ABV",
        company: "qatar airways",
        duration: 60,
        takeOff: 22,
        arrival: 4,
        startDate: "2023/07/11",
        finishDate: "2023/09/08",
        pricePerPerson: 736038,
        capacity: 73,
        flightType: "firstClass"
    }
]
const { PassengerNumber: passengerCount } = params || {};
const availableTickets = data.filter((item)=>
    item.destination === params.destination &&
        item.origin === params.origin && (params.flightType ?? item.flightType === params.flightType) && item.startDate === flightDate && item.finishDate === returnDate
)

if (availableTickets.length){
    availableTickets.map(ticket => {
        ticketsList.innerHTML += `
        <div class="mb-2">
                        <div
                                class=" border border-gray-900 flex w-full transform flex-col justify-between rounded-md bg-gray-200  bg-opacity-75 p-6 text-slate-800 transition duration-500 ease-in-out  hover:shadow-lg dark:bg-slate-700 dark:bg-opacity-25 dark:text-slate-300 lg:flex-row lg:p-4">
                            <div class="flex w-full flex-row lg:w-3/12 self-center">
                                <div class="relative flex flex-col">
                                    <div class="flex h-12 w-12 flex-shrink-0 flex-col justify-center rounded-full bg-opacity-50 ">
                                        <img src="assets/img/lufthansa-logo.png"
                                             class="z-10 h-12 w-12 rounded-full shadow hover:shadow-xl"
                                             alt="lufthansa logo"/>
                                        <span class="absolute right-0 top-0 z-20 flex h-3 w-3">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                                    </div>
                                </div>

                                <div class="mr-4 ">
                                    <div class="w-fullX ">${ticket.company}</div>
                                    <div class="text-sm text-slate-500">شماره پرواز: ${ticket.flightNUmber}</div>
                                </div>
                            </div>
                            
                            <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0 md:text-center">${ticket.flightType}</div>
                            <div class="flex justify-between">
                                <div class=" self-center pt-4 w-auto lg:pt-0 md:text-center">
                                    <div class="ml-1">
                                        <div>${ticket.origin}</div>
                                        <div class="text-xl font-bold leading-5 tracking-tight">Dec 20, 2022</div>
                                        <div class="text-sm text-slate-500 ">${ticket.takeOff} GMT+3:30</div>
                                    </div>
                                </div>
                                
                                <div class="self-center text-4xl"> &larr; </div>
                                
                                <div class=" self-center pt-4 w-auto lg:pt-0 md:text-center">
                                    <div class="ml-1">
                                        <div>${ticket.destination}</div>
                                        <div class="text-xl font-bold leading-5 tracking-tight">Dec 21, 2022</div>
                                        <div class="text-sm text-slate-500 ">${ticket.arrival} GMT+3:30</div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0 md:text-center">
                                <div class="ml-1">
                                    <div class="text-xl font-extrabold leading-5 tracking-tight">
                                        <span class="align-middle">${passengerCount * ticket.pricePerPerson}</span>
                                        <span class="text-[8px]  rounded  py-1 align-middle font-bold uppercase ">ریال</span>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full self-center px-1 pt-4 pb-2 lg:w-1/6 lg:px-0 lg:pt-0 lg:pb-0 md:text-center flex flex-col">
                                <span class=${ticket.capacity > 3 * passengerCount ? 'font-bold' : 'text-red-800'}>${ticket.capacity} نفر</span>
                                <span class=${ticket.capacity < 3 * passengerCount ? 'text-red-800' : 'hidden'} > 3>تعداد بلیط محدود است.</span>
                            </div>


                            <div class="self-center">
                                <div class="w-32 text-sm bg-green-600 text-white text-center py-1 rounded-lg hover:cursor-pointer" onclick="window.location.href = '/buyTicket.html?number=${passengerCount}'" >
                                    خرید
                                </div>
                            </div>
                        </div>
                    </div>
    `
    })
}else ticketsList.innerHTML += `
    <h1 class="text-center lg:text-xl">بیلطی یافت نشد<h1/>
`


//******************************************//

FLIGHT_MODE.value = params.flightMode;
ORIGIN.value = params.origin;
DESTINATION.value = params.destination;
PASSENGER_NUMBER.value = params.PassengerNumber;
START_DATE.value = params.startDate;
FINISH_DATE.value = params.finishDate;
FLIGHT_TYPE.value = params.flightType;

TICKET_SEARCH_BTN.addEventListener("click", function() {
    let params = '?'
    // if (!!ORIGIN || !!DESTINATION || !!START_DATE || !!FINISH_DATE){
    //     return;
    // }

    params += 'flightMode='+FLIGHT_MODE.value+'&';
    params += 'origin='+ORIGIN.value+'&';
    params += 'destination='+DESTINATION.value+'&';
    params += 'PassengerNumber='+PASSENGER_NUMBER.value+'&';
    params += 'startDate='+START_DATE.value+'&';
    params += 'finishDate='+FINISH_DATE.value+'&';
    params += 'flightType='+FLIGHT_TYPE.value;

    console.log(params)
    window.location.href ='/tickets.html'+params;
});

function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    if (value<=0)
        value =1;
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
