import example from './modules/example.js';

function eventMetric() {
  const listValue = ['nur.kz', 'smi24.kz', 'arbat.media', 'ktk.kz', 'news.mail.ru', 'm.pogoda.yandex.ru'];

  const paramsUrl = window.location.search;
  const searchParams = new URLSearchParams(paramsUrl);
  const curPlacament = searchParams.get('placament');
  if (listValue.includes(curPlacament)) {
  }
}

eventMetric();
