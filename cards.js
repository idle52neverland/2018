const cardArea = document.getElementById('cardArea');

const container_RADIO = document.createElement('div');
container_RADIO.className = 'card-container';
container_RADIO.dataset.category = 'RADIO';

(() => {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = 'https://www.youtube.com/watch?v=OorZpjSm7QE';
  a.target = '_blank';
  a.dataset.category = 'RADIO';
  a.dataset.member = '민니';
  a.dataset.year = '2025';

  const img = document.createElement('img');
  img.src = 'https://i.ytimg.com/vi/OorZpjSm7QE/hqdefault.jpg';
  img.alt = '민니 - 볼륨 초대석 : 최효정의 비밀정원 with 민니 (MINNIE) full ver. / [오마이걸 효정의 볼륨을 높여요] | KBS';

  const div = document.createElement('div');
  div.className = 'card-title';
  div.textContent = `볼륨 초대석 : 최효정의 비밀정원 with 민니 (MINNIE) full ver. / [오마이걸 효정의 볼륨을 높여요] | KBS (2025-01-23)`;

  a.appendChild(img);
  a.appendChild(div);
  container_RADIO.appendChild(a);
})();

(() => {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = 'https://www.youtube.com/watch?v=inaLcT_gOS8';
  a.target = '_blank';
  a.dataset.category = 'RADIO';
  a.dataset.member = '아이들';
  a.dataset.year = '2025';

  const img = document.createElement('img');
  img.src = 'https://i.ytimg.com/vi/inaLcT_gOS8/hqdefault.jpg';
  img.alt = '아이들 - [FULL] 함께해서 두 배로 즐거웠던 시간🥳 아이들(idle), 조째즈(ZO ZAZZ) 보는 라디오 | 두시탈출 컬투쇼';

  const div = document.createElement('div');
  div.className = 'card-title';
  div.textContent = `[FULL] 함께해서 두 배로 즐거웠던 시간🥳 아이들(idle), 조째즈(ZO ZAZZ) 보는 라디오 | 두시탈출 컬투쇼 (2025-05-27)`;

  a.appendChild(img);
  a.appendChild(div);
  container_RADIO.appendChild(a);
})();

cardArea.appendChild(container_RADIO);

const container_MV = document.createElement('div');
container_MV.className = 'card-container';
container_MV.dataset.category = 'MV';

(() => {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = 'https://www.youtube.com/watch?v=8KpvPHcXr1c';
  a.target = '_blank';
  a.dataset.category = 'MV';
  a.dataset.member = '민니';
  a.dataset.year = '2025';

  const img = document.createElement('img');
  img.src = 'https://i.ytimg.com/vi/8KpvPHcXr1c/hqdefault.jpg';
  img.alt = '민니 - 민니(MINNIE) - 'Blind Eyes Red' Official Music Video';

  const div = document.createElement('div');
  div.className = 'card-title';
  div.textContent = `민니(MINNIE) - 'Blind Eyes Red' Official Music Video (2025-02-27)`;

  a.appendChild(img);
  a.appendChild(div);
  container_MV.appendChild(a);
})();

(() => {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = 'https://www.youtube.com/watch?v=rTKqSmX9XhQ';
  a.target = '_blank';
  a.dataset.category = 'MV';
  a.dataset.member = '아이들';
  a.dataset.year = '2025';

  const img = document.createElement('img');
  img.src = 'https://i.ytimg.com/vi/rTKqSmX9XhQ/hqdefault.jpg';
  img.alt = '아이들 - (G)I-DLE (여자)아이들 - 'Klaxon' Official Music Video';

  const div = document.createElement('div');
  div.className = 'card-title';
  div.textContent = `(G)I-DLE (여자)아이들 - 'Klaxon' Official Music Video (2025-03-05)`;

  a.appendChild(img);
  a.appendChild(div);
  container_MV.appendChild(a);
})();

cardArea.appendChild(container_MV);

const container_INTERVIEW = document.createElement('div');
container_INTERVIEW.className = 'card-container';
container_INTERVIEW.dataset.category = 'INTERVIEW';

(() => {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = 'https://www.youtube.com/watch?v=NSD0BJIdCjw';
  a.target = '_blank';
  a.dataset.category = 'INTERVIEW';
  a.dataset.member = '아이들';
  a.dataset.year = '2025';

  const img = document.createElement('img');
  img.src = 'https://i.ytimg.com/vi/NSD0BJIdCjw/hqdefault.jpg';
  img.alt = '아이들 - K-pop Stars i-dle Dish On 8th Mini Album [We are] (Exclusive)';

  const div = document.createElement('div');
  div.className = 'card-title';
  div.textContent = `K-pop Stars i-dle Dish On 8th Mini Album [We are] (Exclusive) (2025-05-19)`;

  a.appendChild(img);
  a.appendChild(div);
  container_INTERVIEW.appendChild(a);
})();

(() => {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = 'https://www.youtube.com/watch?v=YA7W7r_4A6Y';
  a.target = '_blank';
  a.dataset.category = 'INTERVIEW';
  a.dataset.member = '아이들';
  a.dataset.year = '2025';

  const img = document.createElement('img');
  img.src = 'https://i.ytimg.com/vi/YA7W7r_4A6Y/hqdefault.jpg';
  img.alt = '아이들 - SOHU KOREA 인터뷰';

  const div = document.createElement('div');
  div.className = 'card-title';
  div.textContent = `SOHU KOREA 인터뷰 (2025-05-21)`;

  a.appendChild(img);
  a.appendChild(div);
  container_INTERVIEW.appendChild(a);
})();

cardArea.appendChild(container_INTERVIEW);

