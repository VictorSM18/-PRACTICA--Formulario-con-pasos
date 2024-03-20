const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const setName = document.querySelector(".name");
const setEmail = document.querySelector(".email");
const topicList = document.querySelector(".topic-list");
const pagination = document.querySelector(".pagination");
const step1 = pagination.children[1];
const step2 = pagination.children[2];
const step3 = pagination.children[3];

button1.addEventListener("click", () => {
    if (userName.value && userEmail.value) {
        setName.innerHTML = userName.value;
        setEmail.innerHTML = userEmail.value;

        step1.classList.replace("step-active", "step-passed");
        step2.classList.add("step-active");

        document.body.children[0].classList.add("no-display");
        document.body.children[1].classList.remove("no-display");
    }
});

button2.addEventListener("click", () => {
    let topicResults = getCheckedArray();

    if (topicResults.length > 0) {
        for (let topic of topicResults) {
            let itemList = document.createElement("li");
            itemList.innerHTML = topic;
            topicList.appendChild(itemList);
        }

        step3.classList.add("step-active");
        step2.classList.replace("step-active", "step-passed");

        document.body.children[1].classList.add("no-display");
        document.body.children[2].classList.remove("no-display");
    }
});

button3.addEventListener("click", () => {
    alert("✅ Success");
});

function getCheckedArray() {
    let checkedArray = [];
    document.querySelectorAll('[type="checkbox"]').forEach((item) => {
        if (item.checked === true) {
            checkedArray.push(item.value);
        }
    });
    return checkedArray;
}
