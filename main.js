// $(() => {
//     $(".cloud-left, .cloud-right").each((index, element) => {
//         const cloud = $(element);
//         const cloudNumber = parseInt(
//             cloud.attr("class").match(/cloud-([1-7])/)[1]
//         );
//         // const isLeft = cloud.hasClass("cloud-left");

//         setScroll(cloud, cloudNumber);

//         $(window).on("scroll", () => {
//             setScroll(cloud, cloudNumber);
//         });

//         // setScroll(cloud, cloudNumber)
//     });

//     setScroll($("#title"), 1.5);
//     setScroll($("#mountain"), 0.5, 0);

//     $(window).on("scroll", () => {
//         setScroll($("#title"), 1.5);
//         setScroll($("#mountain"), 0.5, 0);
//     });
// });

$(() => {
    const mountain = $("#mountain");
    const cloudsBack = $("#clouds-back");
    const cloudsFront = $("#clouds-front");
    const title = $("#title");

    setScrolls();

    $(window).on("scroll", () => {
        setScrolls();
    });

    function setScrolls() {
        setScroll(mountain, 1);
        setScroll(cloudsBack, 1.2);
        // setScroll(cloudsFront, 3);
        setScroll(title, 1.5);
    }
});

function setScroll(element, factor) {
    const scrollTop = $(window).scrollTop();

    if ($(element).offset().top + $(element).height() - scrollTop <= 0) return;

    // if (factor < 6)
    element.css("bottom", -scrollTop / Math.exp(factor / 2) + "px");
}
