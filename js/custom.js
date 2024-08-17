
//   let h3 = $(".footer-links-wrapper h3");
//   let ul = $(".footer-links-wrapper ul");

//   $(window).on("resize", function() {
//     const screenWidth = $(window).width();

//     if (screenWidth < 768) {
//       h3.off("click"); // Remove any existing click event handlers

//       h3.click(function() {
//         $(this).next(ul).slideToggle();
//         $(this).toggleClass("expanded");
        // if ($(this).hasClass("expanded")) {
        //   $(this).css("border-bottom", "none");
        //   ul.find("li:last-child").css("border-bottom", "1px solid #ccc");
        // } else {
        //   $(this).css("border-bottom", "1px solid #ccc");
        //   ul.find("li:last-child").css("border-bottom", "none");
        // }
//       });
//     } else {
//       h3.off("click");
//       h3.css("border-bottom", "");
//       ul.find("li:last-child").css("border-bottom", "none");
//     }
//   });
// });




// const h3 = $(".footer-links-wrapper h3");
// const ul = $(".footer-links-wrapper ul");
// h3.click(function () {
//   if (window.innerWidth <= 768) {
//     $(this).next(ul).slideToggle();
//     $(this).toggleClass("expanded");
    // if ($(this).hasClass("expanded")) {
    //   // Expanded state: Remove border from h3
    //   $(this).css("border-bottom", "none");
    //   $(this).next(ul).css("border-bottom", "1.5px solid #ccc");
    // } else {
    //   // Collapsed state: Restore border to h3
    //   $(this).css("border-bottom", "1px solid #ccc");
    //   $(this).next(ul).css("border-bottom", "none"); // Restore original style
    // }
//   }
// });
// Additional code to toggle on window resize

// $(window).resize(function() {
//     if (window.innerWidth > 768) {
//         ul.slideDown();
//         h3.removeClass('expanded');
//         h3.css('border-bottom', 'none');
//         ul.css('border-bottom', 'none');
//     } else {
//         ul.hide();
//         h3.css('border-bottom', '1px solid #ccc');
//     }
// });

var parent = $(".footer-links-wrapper ul ");
$(".footer-links-wrapper h3").click(function () {
  if ($(window).width() <= 768) {
    $(this).toggleClass("expanded");
    $(this).next(parent).slideToggle();
    if ($(this).hasClass("expanded")) {
          $(this).css("border-bottom", "none");
          ul.find("li:last-child").css("border-bottom", "1px solid #ccc");
        } else {
          $(this).css("border-bottom", "1px solid #ccc");
          ul.find("li:last-child").css("border-bottom", "none");
    //Sibling elements are elements that share the same parent.
  }
}});

//This attaches a resize event handler to the window object.
$(window).resize(function () {
  if ($(window).width() > 768) {
    parent.show();
  }
});
// $(window).resize(function () {
//   if (window.innerWidth > 768) {
//     ul.slideDown();
//     h3.removeClass("expanded");
//     h3.css("border-bottom", "none");
//     ul.css("border-bottom", "none");
//   } else {
//     ul.hide();
//     h3.css("border-bottom", "1px solid #ccc");
//   }
// });