
// To get the images
var images = ['banner5.png', 'banner4.png', 'banner3.png', 'banner2.png', 'banner1.png'];
        
var x = 0;
            
// To get banner
var banner = document.getElementById('banner');
        
// To set slider internal to 5 seconds
setInterval(slider, 5000);
        
// Function to change the images
function slider() {
        
    if (x < images.length) {

        x = x + 1;
                
    }

    else {

        x = 1;
    }
        
    // To change the image to be shown
    banner.innerHTML = "<img src=" + "../images/" + images[x - 1] + " width =" + "100%" + ">";
             
}

