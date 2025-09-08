import "/src/sass/style.scss";

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

try {
    new Swiper(".mySwiper", {
        modules: [Navigation, Pagination],
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        spaceBetween: 10,
    });
} catch (error) {

}