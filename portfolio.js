
// jQuery Smoth Scroll

$('.navbar a').on('click',function(e){
    if(this.has !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate( {
            scrollTop: $(hash).offset().top
        },
        800
        );
    }
        });

        //   function for creating info cards 
function meFunction() {
    document.createElement("div").click();
    document.innerHTML = ".card";
    document.body.appendChild(card);
    }

    let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/umberto-FewHpO4VC9Y-unsplash.jpg);
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}
