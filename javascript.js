const input = document.getElementById("numofwords");
const container = document.querySelector(".container");

const generateWord = (n) =>{
    let text = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for(let i=0 ; i<n ; ++i)
    {
        const random = (Math.random() * 25).toFixed(0);
        text += letters[random];
    }
      return text;
};




const generatepara = ()=>{
    const numofword = Number(input.value);

    const para = document.createElement("p");

    let data = "";

    for (let i = 0; i < numofword; ++i) {
        const randomNumber = (Math.random() * 25).toFixed(0);
        data += generateWord(randomNumber);
        data += " ";
    }

    para.innerText = data;

    para.setAttribute("class" , "paras");

    container.append(para);
}