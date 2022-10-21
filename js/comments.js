// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

// <li class="social__comment">
//     <img
//         class="social__picture"
//         src="{{аватар}}"
//         alt="{{имя комментатора}}"
//         width="35" height="35">
//     <p class="social__text">{{текст комментария}}</p>
// </li>
import {createdPhotos} from './thumbnails';

const commentsContainer = document.querySelrctor('.social__comments');
commentsContainer.innerHTML = '';

const commentFragment = document.createDocumentFragment();


createdPhotos.forEach(({comments}) => {
  const commentItem = document.createElement('li');
  commentItem.classList.add('social__comment');
  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  const commentDescription = document.createElement('p');
  commentDescription.classList.add('social__text');

  commentAvatar.src = comments.avatar;
  commentAvatar.alt = comments.name;
  commentDescription.textContent = comments.message;

  commentItem.appendChild(commentAvatar);
  commentItem.appendChild(commentDescription);
  commentFragment.appendChild(commentItem);
});

commentsContainer.appendChild(commentFragment);
