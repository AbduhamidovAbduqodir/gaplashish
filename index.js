let IuputData = document.getElementById('search')
// console.log(IuputData);
let BtnData = document.getElementById('inputBtn')
let TextBtn = document.getElementById('testbtn')

BtnData.addEventListener('click', () => {
    // console.log(IuputData.value);

    TextBtn.innerHTML +=
        `        <h1 class="text-[white] pl-[50px] pt-[20px]">${IuputData.value}</h1>`
    IuputData.value = ""
})
