import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImage } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';


const searchForm = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const galleryBox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const inputValue = searchForm.elements.query.value.trim();

    if(!inputValue) {
        return iziToast.error({
            title: 'Error',
            message: "Please fill in the search field!",
            position: 'topRight',
        });
    }

    showLoader();
    gallery.innerHTML = "";
    getImage(inputValue)
    .then(data => {
        const markup = imageTemplate(data.hits);
        gallery.innerHTML = markup;

        galleryBox.on('show.simplelightbox', function () {});
        galleryBox.refresh();

        if(data.hits.length === 0){
            iziToast.info({
                title: 'Info',
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: 'topRight',
            });
        }
    })
    .catch(error => {
        iziToast.error({
            title: 'Error',
            message: "Sorry, there was an error processing your request. Please try again later!",
            position: 'topRight',
        });
    })
    .finally(() => {
        searchForm.reset()
        hideLoader()
    });
}

function showLoader() {
    loader.classList.remove('hidden');
}
  
function hideLoader() {
    loader.classList.add('hidden');
}
