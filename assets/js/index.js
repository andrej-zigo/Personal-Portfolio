$(document).ready(() => {

    /* Hamburger Functionality*/
    $('.ham').click(function clickMenu() {
        // Making Side Menu Bar Visible/Invisible On Menu Click
        $('.nav-elements').toggleClass('nav-visible');
      
        // Toggle body overflow based on the menu visibility
        $('body').css("overflow", $('.nav-elements').hasClass('nav-visible') ? "hidden" : "visible");
      });
      
      // Click event handler for '.nav-link' and '.nav-btn'
      $('.nav-link, .nav-btn').click(function() {
        // Check if the navigation menu is visible
        if ($('.nav-elements').hasClass('nav-visible')) {
          // Hide the menu and remove 'active' class from '.ham'
          $('.ham').click();
          $('.ham').removeClass('active');
        }
      });      

    /* About - Tab Functionality */
    viewTab('skills', "skill-head")
});


/* About - Tab Function */
function viewTab(tabName, tabHead){
    $('.tab').removeClass('active');
    $('#' + tabHead).toggleClass('active');

    $('.tab').css({color: "var(--primary-text)"});
    $('#' + tabHead).css({color: "var(--red)"});

    $('.tab-contents').css({display: "none"});
    $('.' + tabName).css({display: "block"});
}
