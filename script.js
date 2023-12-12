const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    const sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }

    function closemenu(){
        sidemenu.style.right = "-200px";
    }

    document.addEventListener("DOMContentLoaded", function() {
        // Get the button element
        var scrollToTopBtn = document.getElementById("scrollToTop");
    
        // Show/hide the button based on the scroll position
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };
    
        // Scroll to the top when the button is clicked
        scrollToTopBtn.addEventListener("click", function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        });
    });