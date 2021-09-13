const toggle = document.querySelector('#toggle-menu');
const nav = document.querySelector('nav');
toggle.onclick = toggleMenu;

function toggleMenu() {
    toggle.classList.toggle('active');
    nav.classList.toggle('show');
    //console.log(nav);
};
$('.owl-news').owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1900: {
            items: 3
        }
    }
});
$('.owl-collapse').owlCarousel({
    loop: true,
    dots: false,
    margin: 65,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1300: {
            items: 5
        },
    }
});
$('.owl-our-mobie').owlCarousel({
    loop: true,
    dots: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        }
    }
});

$('.owl-landing-mobie').owlCarousel({
    loop: true,
    dots: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        }
    }
});

$('.owl-landing-mobie-ss3').owlCarousel({
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            loop: true,
            dots: true,
            items: 1
        },
        600: {
            dots: true,
            loop: true,
            items: 2
        },
        800: {
            loop: true,
            dots: true,
            items: 3
        }
    }
});

$('.owl-industries').owlCarousel({
    item: 20,
    loop: false,
    center: true,
    margin: 10,
    nav: true, 
    dots: false,
    URLhashListener: true, 
    rtl: false,
    startPosition: '2',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        },
        1900: {
            items: 6
        }
    }
});
const owlLss4 = $('.owl-landing-mobie-ss4');
owlLss4.owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            dots: true,
            items: 1
        },
        600: {
            dots: true,
            items: 2
        },
        1000: {
            items: 2
        },
        1900: {
            items: 2
        }
    }
}); 

$('.next-slide-d').click(function() {
    owlLss4.trigger('next.owl.carousel'); 
    console.log(123);
});
$('.prev-slide-d').click(function() { 
    owlLss4.trigger('prev.owl.carousel'); 
    console.log(123);
}); 

$('.owl-landing-mobie-ss5').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            dots: true,
            items: 1
        },
        600: {
            dots: true,
            items: 2
        },
        1000: {
            items: 3
        },
        1900: {
            items: 3
        }
    }
});

$('.owl-induction-ss3').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            dots: true,
            items: 1
        },
        600: {
            dots: true,
            items: 2
        },
        1000: {
            items: 4
        },
        1900: {
            items: 4
        }
    }
});

$('.owl-induction-ss5').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            dots: true,
            items: 1
        },
        600: {
            dots: true,
            items: 1
        },
        1000: {
            items: 2
        },
        1900: {
            items: 2
        }
    }
});
$('.owl-company-ss3').owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            dots: true,
            items: 1
        },
        600: {
            dots: true,
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
$('.owl-company-ss4').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            loop: true,
            dots: true,
            items: 1
        },
        600: {
            loop: true,
            dots: true,
            items: 2
        },
        1000: {
            items: 3
        },
        1300: {
            items: 4
        }
    }
});

$('.owl-company-ss5').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            loop: true,
            dots: true,
            items: 1
        },
        600: {
            loop: true,
            dots: true,
            items: 2
        },
        1000: {
            items: 3
        },
        1900: {
            items: 3
        }
    }
});

$('.owl-company-ss6').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            loop: true,
            dots: true,
            items: 1
        },
        600: {
            loop: true,
            dots: true,
            items: 2
        },
        1000: {
            items: 4
        },
        1300: {
            items: 6
        }
    }
});
$('.owl-company-ss7').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            loop: true,
            dots: true,
            items: 2
        },
        600: {
            loop: true,
            dots: true,
            items: 2
        },
        1000: {
            items: 2
        },
        1900: {
            items: 2
        }
    }
});

$('.owl-related').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
        0: {
            dots: true,
            loop: true,
            items: 1
        },
        600: {
            dots: true,
            loop: true,
            items: 2
        },
        1000: {
            items: 3
        },
        1900: {
            items: 3
        }
    }
});

$('.owl-maps').owlCarousel({
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            loop: true,
            dots: true,
            items: 2
        },
        600: {
            dots: true,
            loop: true,
            items: 2
        },
        800: {
            loop: true,
            dots: true,
            items: 3
        }
    }
});
$('.owl-deliver-ss2').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            loop: true,
            dots: true,
            items: 1
        },
        600: {
            loop: true,
            dots: true,
            items: 2
        },
        1000: {
            items: 3
        },
        1900: {
            items: 3
        }
    }
});

$('.owl-5-item').owlCarousel({
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            loop: true,
            dots: true,
            items: 1
        },
        600: {
            loop: true,
            dots: true,
            items: 2
        },
        1000: {
            items: 5
        },
        1900: {
            items: 5
        }
    }
});

$('.owl-2-item').owlCarousel({
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            loop: true,
            dots: true,
            items: 1
        },
        600: {
            loop: false,
            dots: true,
            items: 2
        },
        1000: {
            items: 2
        },
        2000: {
            items: 2
        }
    }
});

const owl4 = $('.owl-4-item');
owl4.owlCarousel({
    margin: 10,
    nav: false, 
    responsiveClass: true,
    responsive: {
        0: {
            loop: true,
            dots: true,
            items: 1
        },
        600: {
            loop: false,
            dots: true,
            items: 2
        },
        1000: {
            items: 3
        },
        1025: {
            items: 4
        },
        2000: {
            items: 4
        }
    }
});

$('.next-slide').click(function() {
    owl4.trigger('next.owl.carousel'); 
});
$('.prev-slide').click(function() { 
    owl4.trigger('prev.owl.carousel'); 
}); 

$('.owl-1-item').owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        }, 
        1900: {
            items: 1
        }
    }
}); 
//collapse
const coll = document.querySelectorAll(".title-collapse");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight)
            content.style.maxHeight = null;
        else
            content.style.maxHeight = content.scrollHeight + "px";
    });
};
const collm = document.querySelectorAll(".collapsible");
let j;

for (j = 0; j < collm.length; j++) {
    collm[j].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight)
            content.style.maxHeight = null;
        else
            content.style.maxHeight = content.scrollHeight + "px";
    });
};
function santanNav(){
    const sections = document.querySelectorAll(".satan-nav");
    const NavLinks = document.querySelectorAll(".block-fix a");
    sections.forEach(section => {
        section.addEventListener('mouseenter',function(){
            let id = this.getAttribute("id");
            let navActive = document.querySelector(`a[href="#${id}"]`);
            NavLinks.forEach(link => link.classList.remove("active"));
            navActive.classList.add("active");
        });
    });
};
santanNav();

// ranger show number

function onChangeRanger(){
    const ranger = document.querySelector('#ranger');
    const numberRanger = document.querySelector('#numberRanger');  
    
    if (ranger && numberRanger){
        ranger.addEventListener('change', function(){
            numberRanger.value = ranger.value; 
        });
	
        numberRanger.addEventListener('change', function(){
            ranger.value = numberRanger.value; 
        });
    };
};
onChangeRanger(); 

const popups = document.querySelectorAll(".popup");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

for (let i = 0; i <= popups.length;i++){
    if (popups[i] && modal){
        popups[i].addEventListener('click', function() {
            modal.classList.toggle('show-popup');
        });
    }
}
if (close){
    close.addEventListener('click',function(){
        modal.classList.remove('show-popup');    
    });
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) 
        modal.classList.remove('show-popup');
};
