const airports = [
    'AUH',
    'ABV',
    'AOR',
    'IKA',
    'ACH'
]

const companies = [
    'emirates airways',
    'qatar airways',
    'lufthansa',
    'turkish airline',
]
const durations = [
    60,90,120,180
]
const flightClass = [
    'economy','business','firstClass'
]
const MOCK_DATA = [];


for (let i = 0; i < 100; i++) {
    let tempAirports = airports;
    const startDate = randomDate();
    const end = randomDate(startDate)
    MOCK_DATA.push({
        id: i + 1,
        flightNUmber: Math.floor(1000 + Math.random() * 9000),
        origin: tempAirports[Math.floor((Math.random() * tempAirports.length))],
        destination: tempAirports[Math.floor((Math.random() * tempAirports.length))],
        company: companies[Math.floor((Math.random() * companies.length))],
        duration: durations[Math.floor((Math.random() * durations.length))],
        takeOff: Math.floor(Math.random() * 24),
        arrival: Math.floor(Math.random() * 24),
        startDate: startDate.toISOString().split('T')[0].replaceAll('-','/'),
        finishDate: end.toISOString().split('T')[0].replaceAll('-','/'),
        pricePerPerson: Math.floor(Math.random() * (1_000_000 - 600_000 + 1) + 600_000),
        capacity: Math.floor(Math.random() * (110 - 20 + 1)) + 20,
        flightType: flightClass[Math.floor((Math.random()*flightClass.length))]
    })
}
console.log(MOCK_DATA)

// navigator.clipboard.write(data)

function randomDate(start=new Date(2022,12,10)) {
    const end= new Date(2023,12,0);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}