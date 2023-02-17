const forms = document.getElementById('forms-container');
let passengers = []

if (!localStorage.getItem('signupForm') ) window.location.href = '/loginAndRegister.html'
const user = JSON.parse(localStorage.getItem('signupForm'))

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const params = Object.fromEntries(urlParams)
const { number } = params || {};

const numberOfPassengers = +number;

const addPassenger = (passenger) => {
  passengers.push(passenger);
}


for (let i = 0; i <numberOfPassengers ; i++) {
    forms.innerHTML += `
        <form class="flex flex-col md:flex-row z-10 mb-3 justify-center mx-10 border border-gray-300 dark:bg-gray-900 p-6 gap-6 bg-white shadow-lg rounded-lg ring-1 ring-gray-500">
            <input type="text"
            class="text-gray-900 w-full text-sm rounded-lg m-auto  block md:w-1/2 pl-10 p-2.5 placeholder-gray-400  ring-1 ring-gray-900 " + ${user && i === 0 ? 'disabled' : ''}
            placeholder="نام"
            value=${user && i === 0 ? user.fullName : ''}
            >
            <input type="text"
            class="text-gray-900 w-full text-sm rounded-lg m-auto  block md:w-1/2 pl-10 p-2.5 placeholder-gray-400  ring-1 ring-gray-900 " + ${user && i === 0 ? 'disabled' : ''}
            placeholder="نام خانوادگی"
            value=${user && i === 0 ? user.email : '' }>
            <input type="number"
            class="text-gray-900 w-full text-sm rounded-lg m-auto  block md:w-1/2 pl-10 p-2.5 placeholder-gray-400  ring-1 ring-gray-900 " + ${user && i === 0 ? 'disabled' : ''}
            placeholder="شماره پاسپورت"
            value=${user && i === 0 ? user.passportNumber : '' }
            >
        <form
    `
}
function finishProcess() {
    document.getElementById('main').innerHTML += `
        <div id="toast-simple" class="flex items-center p-4 space-x-4 w-full lg:w-1/4 max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
    <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
    <div class="pl-4 text-sm font-normal">بلیط ها با موفقیت خریداری شدند</div>
</div>
    `
}
forms.innerHTML += `
    <div class="flex lg:justify-end">
                                        <button class="p-2 mx-10 border w-full md:w-1/4 rounded-md bg-gray-800 text-white dark:bg-green-600" onclick="finishProcess()">
                                            ثبت و پرداخت
                                        </button>
                                    </div>
`
