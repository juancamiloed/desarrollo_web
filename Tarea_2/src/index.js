const memes = [
    "https://i.pinimg.com/564x/fd/b4/a8/fdb4a8bd218482c668da366011ce91e2.jpg",
    "https://i.pinimg.com/564x/2d/d5/e0/2dd5e0a4706da0c574d1c137ec630974.jpg",
    "https://i.pinimg.com/564x/42/74/52/427452f291d68e0fac4bd3591ed45e3c.jpg",
    "https://i.pinimg.com/564x/93/ca/08/93ca0878309268b8b83fe819c280b363.jpg",
    "https://i.pinimg.com/564x/74/17/c9/7417c9f45c2a98dd03e98762e6e38d0a.jpg",
    "https://i.pinimg.com/564x/23/6c/41/236c41ea6a5bedb7cd11bafd258337e0.jpg",
    "https://i.pinimg.com/564x/e3/da/56/e3da561c17a0139fc52fe2f3dd63393b.jpg",
    "https://i.pinimg.com/564x/df/05/1d/df051d360d8340be2682234584cc299f.jpg",
    "https://i.pinimg.com/564x/2e/3d/f6/2e3df655354bd3a885779134dca504c2.jpg",
    "https://i.pinimg.com/564x/13/95/94/139594e4359a9d93ed63e09e7a694906.jpg",
    "https://i.pinimg.com/564x/f9/77/38/f97738290e9b7fca7a7891bfd7142913.jpg",
    "https://i.pinimg.com/564x/99/38/9f/99389f14d20a1dd65ff5bfe55eca6a30.jpg",
    "https://i.pinimg.com/736x/51/0c/e6/510ce68c450dbc24bd720aa134a2e2b8.jpg",
    "https://i.pinimg.com/564x/5e/22/bd/5e22bdadce646360a1921dbe382c91a2.jpg",
    "https://i.pinimg.com/564x/b8/22/c5/b822c5c43841975669551dacc6b7d92b.jpg"  
];

function code_generator(){
    let code = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 6; i++)
        code += possible.charAt(Math.floor(Math.random() * possible.length));
    return code;
}

let code = code_generator();

let meme = 0;
document.getElementById("img_meme").src = memes[meme];

document.getElementById("code").innerHTML = code;

document.getElementById("captcha").addEventListener("submit", () => {
    let captcha = document.getElementById("captcha_input").value;

    if(captcha == code){
        new_meme = Math.floor(Math.random() * memes.length);
        while(new_meme == meme){
            new_meme = Math.floor(Math.random() * memes.length);
        }
        meme = new_meme;
        document.getElementById("img_meme").src = memes[meme];

        code = code_generator();
        document.getElementById("code").innerHTML = code;

        document.getElementById("captcha_input").value = "";
    }
    else{
        alert("El Captcha esta incorrecto, ¡Crack! \nIntentalo otra vez.");
    }
});