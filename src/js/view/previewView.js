import { View } from './view';
import icons from 'url:../../img/icons.svg'; //console.log(icons);

export class Preview extends View {
  _generateHTMLpreview(data) {
    const id = window.location.hash.slice(1);

    return `
      <li class="preview">
        <a class="preview__link ${
          data.id === id ? 'preview__link--active' : ''
        }" href="#${data.id}">
          <figure class="preview__fig">
            <img src="${data.image_url}" alt="${data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${data.title}</h4>
            <p class="preview__publisher">${data.publisher}</p>
            <div class="preview__user-generated ${data.key ? '' : 'hidden'}">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
      `;
  }
}
