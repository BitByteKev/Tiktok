const inputEl = document.getElementById("inputEl");
const genBtn = document.getElementById("gen-btn");

genBtn.addEventListener("click", function() {
    const pTag = document.getElementById("coined");
    const input = inputEl.value.trim();

    pTag.innerText = `You have added 10,000 coins to the user: ${input}`;
    inputEl.value = ""; 
});
