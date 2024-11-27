import React from "react";

export default function StickyContainer({ leftBlock,  }) {
  function lol() {
    return <div className="asdsadsad">asddasadsasdasdasdads</div>;
  }

  return (
    <>
      <div className="sticky-container">
        <div className="sticky-container__left">{leftBlock}</div>
        <div className="sticky-container__right">
          <div className="section4__sticky-wrapper">
            <div className="section4__sticky-circle--wrapper">
              <div className="section4__sticky-circle"></div>
            </div>
            <div className="section4__sticky-line"></div>
          </div>
          <ul>

          </ul>
        </div>

        <div className="section4__wrapper">
          <ul className="section4__list">
            <li className="section4__card">
              <h3>Анализ потребностей</h3>
              <p>
                Ваши пожелания будут внимательно выслушаны и точно
                задокументированы. Мы
                <span className="gold_text">ценим ваше время</span> и исключим
                необходимость повторять ни единого слова.
              </p>
            </li>
            <div className="space"></div>
            <li className="section4__card">
              <h3>Индивидуальное предложение</h3>
              <p>
                Ваши потребности будут визуализированы на наглядной схеме. Наш
                <span className="gold_text">многолетний опыт</span> позволяет
                добавлять к каждому запросу полезные фишки и инсайды.
              </p>
            </li>
            <div className="space"></div>

            <li className="section4__card">
              <h3>Закрепление договоренностей</h3>
              <p>
                Наш договор гарантирует полную конфиденциальность как в период
                сотрудничества, так и после его завершения. Сроки выполнения
                будут четко зафиксированы и
                <span className="gold_text">строго соблюдены.</span>
              </p>
            </li>
            <div className="space"></div>

            <li className="section4__card">
              <h3>Разработка</h3>
              <p>
                Разработка будет выполнена в
                <span className="gold_text">кратчайшие сроки</span> и полностью
                соответствовать техническому заданию. Уже через несколько дней
                ваша система будет готова, включая видеоуроки для использования
                с компьютера и мобильного приложения.
              </p>
            </li>
            <div className="space"></div>

            <li className="section4__card">
              <h3>Обучение и адаптация</h3>
              <p>
                Мы берем на себя
                <span className="gold_text">полное обучение</span> вашей
                команды. Наши специалисты приедут на рабочие места ваших
                сотрудников (офис, производство, выезды) и проведут обучение на
                месте. В течение месяца мы обеспечиваем вашей компании
                круглосуточную поддержку 24/7 без ожидания в очереди.
              </p>
            </li>
            <div className="space"></div>

            <li className="section4__card">
              <h3>Внедрение завершено</h3>
              <p>
                Система работает без сбоев и способствует
                <span className="gold_text">постепенному улучшению</span> всех
                показателей вашей компании. Все сотрудники обучены, и наше
                вмешательство потребуется только в случае, если вы решите
                добавить новый функционал.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
