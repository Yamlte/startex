import { useState } from 'react';
import './App.css';
import React from 'react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 px-6 z-50">
      <img 
        className="absolute top-15 left-4 w-[100px] h-[100px] sm:w-[100px] sm:h-[100px]" 
        src="logo.png" 
        alt="logo" 
      />
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">Главная</a>
          <a href="#" className="hover:text-gray-400">Центр обучения</a>
          <a href="#" className="hover:text-gray-400">Отзывы</a>
          <a href="#" className="hover:text-gray-400">Контакты</a>
          <a href="#" className="hover:text-gray-400">Есть вопросы?</a>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-900 text-white mt-2 space-y-2 py-2 px-4 flex flex-col items-center`}>
        <a href="#" className="block py-2 hover:bg-gray-700 rounded">Главная</a>
        <a href="#" className="block py-2 hover:bg-gray-700 rounded">Центр обучения</a>
        <a href="#" className="block py-2 hover:bg-gray-700 rounded">Отзывы</a>
        <a href="#" className="block py-2 hover:bg-gray-700 rounded">Контакты</a>
        <a href="#" className="block py-2 hover:bg-gray-700 rounded">Есть вопросы?</a>
      </div>
    </nav>
  );
}
function App() {
  // Массив с отзывами
  const reviews = [
    {
      name: 'Влад Лобов',
      text: 'Лучшая программа спортивного клуба. Огромный функционал, как для руководящего состава: гибкая система отчетности, контроль бухгалтерии, CRM система, расписание для тренеров.',
      image: 'Vlad.jpeg',
    },
    {
      name: 'Дмитрий Горошин',
      text: 'Программа простая и удобная. Меню понятное, все необходимые разделы под рукой. Интеграции с сервисами (IP телефония, онлайн-кассы, WhatsApp, Telegram, Wallet) делают работу комфортной.',
      image: 'dmitry.jpeg',
    },
    {
      name: 'Александра Федорова',
      text: 'Стажировалась в компании. Отличный коллектив, хорошее начальство. Обучают веб-технологиям через практику, что очень круто! Мне понравилось.',
      image: 'alexsandra.jpeg',
    },
    {
      name: 'Виктор Текин',
      text: 'За время стажировки изучил serverless, создал бота с рассылкой картинок, освоил API, поработал с крутыми специалистами. Это лучше, чем обычная учеба.',
      image: 'victor.jpeg',
    },
  ];

return (
<>
<div>
  <header className="bg-gray-800 text-white text-center relative min-w-screen min-h-screen mb-6">
    <Navbar/>
    <img
      className="absolute top-4 left-4 w-[40px] h-[40px] sm:w-[100px] sm:h-[100px]"
      src="logo.png"
      alt="logo"
    />
    {/* Фоновое изображение */}
    <img
      className="absolute inset-0 w-full h-full md:h-full object-cover boder-4 border-black "
      src="logotip.jpg"
      alt="Логотип CRM"
    />
    {/* Заголовок */}
    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl  font-extrabold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2), 4px_4px_6px_rgba(0,0,0,0.1), 6px_6px_8px_rgba(0,0,0,0.1)]">
      Старт Эксперт
    </h1>
  </header>
  <main>
    <div className="max-w-7xl mx-auto px-6 py-6">
      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl text-black font-bold">
            ООО «Старт Эксперт» является разработчиком программного обеспечения для управления спортивными клубами SportCRM.
          </h2>
          <p className="text-black">
            SportCRM позволяет внедрить наиболее эффективные методы в процесс управления спортивным клубом или школой, рационально использовать потенциал каждого спортсмена, грамотно выстраивать взаимоотношения со всеми участниками процесса: тренерами, родителями, спортсменами. Систему управления спортклубами можно использовать в любом тренировочном центре страны.
            <br />
            Наш продукт SportCRM уже используется более чем в 300 коммерческих спортивных клубах, включая такие известные, как Центр прогресса художественной гимнастики И.А.Винер, Детско-юношеская футбольная академия ПФК ЦСКА и Центр гимнастики Олимпийской чемпионки Ю.Барсуковой, Центр спортивной гимнастики Двукратной Олимпийской чемпионки С. Хоркиной и многие другие.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="sportcrm_logo_gpresent.png" alt="Главное изображение" className="w-150 h-64 md:ml-30"/>
        </div>
      </section>
  {/* Преимущества */}
<section id="advantages" className="mt-10 text-center">
  <h1 className="text-3xl text-black font-bold underline mx-auto w-full md:w-1/2">Преимущества:</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 place-items-center">
    <div className="flex flex-col items-center max-w-2xl">
      <img src="highqua.png" alt="Качество" className="mx-auto w-110 h-100" />
      <h2 className="mt-2 font-bold text-black">Высокое качество</h2>
      <h4 className="text-black text-2xl">
        Мы уделяем большое внимание качеству нашего продукта и постоянно работаем над его улучшением. Каждая версия тщательно тестируется нашими специалистами, чтобы гарантировать высокую производительность и надежность. Кроме того, мы регулярно обновляем и улучшаем наше программное обеспечение, чтобы наши клиенты могли использовать самые передовые технологии для управления своими спортивными клубами.
      </h4>
    </div>
    <div className="flex flex-col items-center max-w-2xl">
      <img src="usability.png" alt="Удобство использования" className="mx-auto w-150 h-100 object-cover" />
      <h2 className="mt-2 font-bold text-black">Удобство использования</h2>
      <h4 className="text-black text-2xl">
        Мы разработали SportCRM с учетом потребностей пользователей и стремимся сделать его максимально удобным и интуитивно понятным. Наше программное обеспечение имеет простой и понятный интерфейс, который позволяет быстро и легко управлять всеми аспектами спортивного клуба.
      </h4>
    </div>
    <div className="flex flex-col items-center max-w-2xl">
      <img src="safety.jpg" alt="Безопасность" className="mx-auto w-150 h-100 object-cover" />
      <h3 className="mt-2 font-bold text-black">Безопасность</h3>
      <h4 className="text-black text-2xl">
        Мы обеспечиваем высокий уровень безопасности нашего продукта, используя передовые технологии защиты данных, чтобы гарантировать конфиденциальность и безопасность информации наших клиентов. Мы также регулярно проверяем нашу CRM-систему на наличие уязвимостей и обновляем ее для защиты от новых угроз.
      </h4>
    </div>
    <div className="flex flex-col items-center max-w-2xl">
      <img src="qua.png" alt="Клиентоориентированность" className="mx-auto w-150 h-100 object-cover" />
      <h3 className="mt-2 font-bold text-black">Клиентоориентированность</h3>
      <h4 className="text-black text-2xl">
        Наша команда предоставляет профессиональную техническую поддержку нашим клиентам. Мы всегда готовы помочь нашим пользователям решить любые проблемы, связанные с использованием предоставляемого нами программного обеспечения. Мы также предоставляем обучение и консультации по использованию нашего программного обеспечения, чтобы клиенты могли использовать его максимально эффективно.
      </h4>
    </div>
  </div>
</section>
  {/* Блок с отзывами */}
    <section id="reviews" className="mt-10 p-6">
        <h2 className="text-2xl text-black font-bold text-center">Отзывы клиентов</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl text-center shadow-lg">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-gray-300"
              />
              <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
              <p className="text-gray-700 mt-2">{review.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
  {/* Партнеры */}
  <section id="partners" className="mt-10">
    <h2 className="text-2xl text-black font-bold text-center">Наши партнеры</h2>
    <div className="flex overflow-x-auto space-x-4 mt-6 p-4">
  <div className="flex flex-col items-center text-black">
    <img src="fondin.png" alt="Партнер 1" className="w-32 h-32 md:w-40 md:h-40 lg:w-55 lg:h-48 mb-2" />
    <h3 className="text-center text-lg sm:text-xl md:text-2xl">Фонд содействия развитию малых форм предприятий в научно-технической сфере</h3>
  </div>
  <div className="flex flex-col items-center text-black">
    <img src="kgy.jpeg" alt="Партнер 2" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-2" />
    <h3 className="text-center text-lg sm:text-xl md:text-2xl">Кубанский государственный университет физической культуры, спорта и туризма</h3>
  </div>
  <div className="flex flex-col items-center text-black">
    <img src="rsoo.png" alt="Партнер 3" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-2" />
    <h3 className="text-center text-lg sm:text-xl md:text-2xl">РСОО «ФЕДЕРАЦИЯ ГРЕБЛИ НА БАЙДАРКАХ И КАНОЭ ГОРОДА МОСКВЫ»</h3>
  </div>
  
  <div className="flex flex-col items-center text-black">
    <img src="mybusiness.jpeg" alt="Партнер 5" className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-48 mb-2" />
    <h3 className="text-center text-lg sm:text-xl md:text-2xl">Национальный проект «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы»</h3>
  </div>
</div>

  </section>
</div>

<footer id="contacts" className="bg-gray-800 text-white p-6 text-center">
  <section className="mt-10 bg-gray-800 text-white p-6 rounded-2xl">
    <h2 className="text-2xl text-white font-bold">Контакты</h2>
    <div className="flex justify-center items-center gap-4 mt-4">
      <img src="map.png" alt="Location" className="w-15 h-15" />
      <p className="text-white">Краснодар, ул. Северная, д. 405 оф. 203</p>
    </div>
    <div className="flex justify-center items-center gap-4 mt-4">
      <img src="Time.png" alt="Clock" className="w-15 h-15" />
      <p className="text-white">Пн—Пт: 9:00—18:00 Сб—Вс: выходные</p>
    </div>
    <div className="flex justify-center items-center gap-4 mt-4">
      <img src="call.png" alt="Clock" className="w-15 h-15" />
      <p className="text-white">+7 (929) 829-44-42
      mail@startxp.ru</p>
    </div>
  </section>

  <section className="mt-10 text-white">
    <p>Старт Эксперт</p>
    <p>Главная</p>
    <p>Центр обучения</p>
    <p>Политика обработки персональных данных</p>
    <p>ИНН: 23102256</p>
    <p>© 2021-2024 Старт Эксперт</p>
  </section>
</footer>
<iframe
  src="https://yandex.ru/map-widget/v1/?um=constructor%3A%2F%2Fmap%2Fpath%2Fto%2Fyour%2Faddress"
  width="100%"
  height="400"
  frameBorder="0"
  allowFullScreen={true}
  title="Яндекс карта"
></iframe>
</>
);
}

export default App;
