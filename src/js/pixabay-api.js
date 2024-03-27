export function getImage(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: "43094029-935243e587570d50c5a59b02c",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    })
    const url = `${BASE_URL}?${params}`;

    return fetch(url).then(res => res.json());
}
