$(document).ready(() => {
    $(".cloud-left, .cloud-right").each((index, element) => {
        const cloud = $(element);
        const cloudNumber = parseInt(
            cloud.attr("class").match(/cloud-([1-7])/)[1]
        );
        const isLeft = cloud.hasClass("cloud-left");

        let offset = 0;

        if (isLeft) offset = 50;
        else offset = 30;

        setScroll(cloud, cloudNumber, offset);

        $(window).on("scroll", () => {
            setScroll(cloud, cloudNumber, offset);
        });

        // setScroll(cloud, cloudNumber)
    });

    setScroll($("#title"), 1.5);
    setScroll($("#mountain"), 0.5, 0);

    $(window).on("scroll", () => {
        setScroll($("#title"), 1.5);
        setScroll($("#mountain"), 0.5, 0);
    });
});

function setScroll(element, factor, offset = 0) {
    const scrollTop = $(window).scrollTop();
    // if (factor < 6)
    element.css("bottom", -scrollTop / Math.exp(factor * 0.5) - offset + "px");
}

function setScrollTop(element, factor, offset = 0) {
    const scrollTop = $(window).scrollTop();
    // if (factor < 6)
    element.css("top", scrollTop / Math.exp(factor * 0.5) - offset + "px");
}
