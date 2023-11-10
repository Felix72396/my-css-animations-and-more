const cardSwiper = document.getElementsByClassName("card-swiper__container")[0];
const imgNames = ["animal","fruits", "fashion"];


for (let index = 0; index < 3; index++) 
{
    let status = index === 0 ? "active" : "inactive";
    cardSwiper.innerHTML += `<div class="group-card" data-status="${status}">
    <div style="--deg:-25deg; --x: -180%; --y:-50%" class="big-card card"><img src="img/${imgNames[index]}1.jpg"></div>
    <div style="--deg:-10deg; --x: -90%; --y:-55%" class="big-card card"><img src="img/${imgNames[index]}2.jpg"></div>
    <div style="--deg:10deg; --x: -10%; --y:-55%" class="big-card card"><img src="img/${imgNames[index]}3.jpg"></div>
    <div style="--deg:25deg; --x: 80%; --y:-50%" class="big-card card"><img src="img/${imgNames[index]}4.jpg"></div>
    <div style="--deg:-15deg; --x: -250%; --y:-200%" class="little-card card"><img src="img/${imgNames[index]}5.jpg"></div>
    <div style="--deg:15deg; --x: 100%; --y:-200%" class="little-card card"><img src="img/${imgNames[index]}6.jpg"></div>
    <div style="--deg:15deg; --x: -250%; --y:100%" class="little-card card"><img src="img/${imgNames[index]}7.jpg"></div>
    <div style="--deg:-15deg; --x: 100%; --y:100%" class="little-card card"><img src="img/${imgNames[index]}8.jpg"></div>
</div>` 
};
// debugger;

const btnBack = document.getElementById("btn-back");
const btnForward = document.getElementById("btn-forward");

let index = 0;

btnBack.onclick = () => {
    const currentGroupCard = document.getElementsByClassName("group-card")[index];

    if(index > 0)
    {
        index--;
        const nextGroupCard = document.getElementsByClassName("group-card")[index];
        currentGroupCard.dataset.status = "inactive";
        nextGroupCard.dataset.status = "active";
    }
}

btnForward.onclick = () => {
    let length = document.getElementsByClassName("group-card").length;

    const currentGroupCard = document.getElementsByClassName("group-card")[index];

    if(index < length - 1)
    {
        index++;
        const nextGroupCard = document.getElementsByClassName("group-card")[index];
        currentGroupCard.dataset.status = "inactive";
        nextGroupCard.dataset.status = "active";
    }
}

