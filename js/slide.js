$(document).ready(function() {

    $(function () {
        $('body').vegas({
            slides: [
                {src: 'images/slide-1.jpg'},
                {src: 'images/slide-3.jpg'},
                {src: 'images/slide-4.jpg'},
                {src: 'images/slide-2.jpg'},
                {src: 'images/slide-5.jpg'},
                {src: 'images/drip1.webp'}

            ],
            timer: false,
            transition: ['zoomOut',]
        });
    });
});
