function toggleLight(){
    let btn = document.getElementById("lightButton");
    let light = document.getElementById("light");
    btn.classList.toggle("active");
    light.classList.toggle("on");
}
