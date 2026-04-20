const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circles.forEach(item => item.classList.remove('active'));
    circle.classList.add('active');
  });
});

const translations = {
  en: {
    header: {
      pageTitle: 'about us',
      address: 'Kyiv, Mechnikova str, 14/1'
    },

    nav: {
      about: 'about us',
      services: 'services',
      team: 'team',
      publications: 'publications',
      contact: 'contact'
    },

    hero: {
      title: 'We turn over the idea of legal services',
      text1: "Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve the adoption of a number of decisions that are important for the industry. Many people form the practice of applying the law of the sea in Ukraine.",
      text2: 'HLEGAL is a reliable business partner, confirmed by stable cooperation with international law firms, the trust of large Ukrainian and international companies, and the recognition of professional ratings.'
    },

    stats: {
      exp: 'years of relevant experience',
      clients: 'active clients who entrust us with their <br> orders on a monthly basis',
      probono: 'hours of pro bono work annually'
    },

    bottom: {
      title: 'Quality is what we care about the most.',
      text1: 'The historically unchanged legal profession has begun to reformat in recent years. Clients are feeling this, but law firms are still resisting evolution. Clients need convenience, simplicity, transparent payment. Google, IBM WatsOn, Symantec Clearwell prove that the technological revolution in legal services has begun and is imminent.',
      text2: 'Quality is what we care about the most.',
      text3: "It's simple. If you are unhappy with our work, we will refund your money. We trust our clients. And we want our clients to trust us too."
    },

    achievements: {
      title: 'achievements'
    },

    footer: {
      address: 'Kyiv, Mechnikova str, 14/1',
      map: 'On map',
      /* email: 'contact@forstudy.space' */
    }
  },

  uk: {
    header: {
      pageTitle: 'про нас',
      address: 'Київ, вул. Мечникова, 14/1'
    },

    nav: {
      about: 'про нас',
      services: 'послуги',
      team: 'команда',
      publications: 'публікації',
      contact: 'контакти'
    },

    hero: {
      title: 'Ми переосмислюємо ідею юридичних послуг',
      text1: 'Поєднуючи багаторічний досвід і практику, юристи компанії супроводжують складні проєкти та допомагають ухвалювати важливі для галузі рішення. Багато хто формує практику застосування морського права в Україні.',
      text2: 'HLEGAL — надійний бізнес-партнер, що підтверджено стабільною співпрацею з міжнародними юридичними фірмами, довірою великих українських і міжнародних компаній та визнанням професійних рейтингів.'
    },

    stats: {
      exp: 'років релевантного досвіду',
      clients: 'активних клієнтів, які довіряють нам свої доручення <br> щомісяця',
      probono: 'годин роботи pro bono щорічно'
    },

    bottom: {
      title: 'Якість — це те, що для нас найважливіше.',
      text1: 'Історично незмінна юридична професія почала змінюватися в останні роки. Клієнти це відчувають, але юридичні фірми все ще чинять опір еволюції. Клієнтам потрібні зручність, простота, прозора оплата. Google, IBM WatsOn, Symantec Clearwell доводять, що технологічна революція в юридичних послугах уже почалася і є неминучою.',
      text2: 'Якість — це те, що для нас найважливіше.',
      text3: 'Все просто. Якщо ви незадоволені нашою роботою, ми повернемо вам гроші. Ми довіряємо нашим клієнтам. І хочемо, щоб клієнти довіряли нам теж.'
    },

    achievements: {
      title: 'досягнення'
    },

    footer: {
      address: 'Київ, вул. Мечникова, 14/1',
      map: 'На мапі',
      /* email: 'contact@forstudy.space' */
    }
  },

  ru: {
    header: {
      pageTitle: 'о нас',
      address: 'Киев, ул. Мечникова, 14/1'
    },

    nav: {
      about: 'о нас',
      services: 'услуги',
      team: 'команда',
      publications: 'публикации',
      contact: 'контакты'
    },

    hero: {
      title: 'Мы переосмысливаем идею юридических услуг',
      text1: 'Объединяя многолетний опыт и практику, юристы компании сопровождают сложные проекты и помогают принимать важные для отрасли решения. Многие формируют практику применения морского права в Украине.',
      text2: 'HLEGAL — надёжный бизнес-партнёр, что подтверждено стабильным сотрудничеством с международными юридическими фирмами, доверием крупных украинских и международных компаний и признанием профессиональных рейтингов.'
    },

    stats: {
      exp: 'лет релевантного опыта',
      clients: 'активных клиентов, которые ежемесячно доверяют нам свои <br> поручения',
      probono: 'часов работы pro bono ежегодно'
    },

    bottom: {
      title: 'Качество — это то, что волнует нас больше всего.',
      text1: 'Исторически неизменная юридическая профессия начала меняться в последние годы. Клиенты это чувствуют, но юридические фирмы всё ещё сопротивляются эволюции. Клиентам нужны удобство, простота, прозрачная оплата. Google, IBM WatsOn, Symantec Clearwell доказывают, что технологическая революция в юридических услугах уже началась и неизбежна.',
      text2: 'Качество — это то, что волнует нас больше всего.',
      text3: 'Всё просто. Если вы недовольны нашей работой, мы вернём вам деньги. Мы доверяем нашим клиентам. И хотим, чтобы клиенты доверяли нам тоже.'
    },

    achievements: {
      title: 'достижения'
    },

    footer: {
      address: 'Киев, ул. Мечникова, 14/1',
      map: 'На карте',
      /* email: 'contact@forstudy.space' */
    }
  }
};

const languageBtns = document.querySelectorAll('.language_btn');

function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    const text = getValueByPath(translations[lang], key);

    if (text) {
      element.innerHTML = text;
    }
  });

  languageBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

languageBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    applyLanguage(btn.dataset.lang);
  });
});

const savedLang = localStorage.getItem('lang') || 'en';
applyLanguage(savedLang);