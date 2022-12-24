import React from "react";

export default function Driftfaqs() {
  /*=============== ACCORDION ===============*/
  const accordionItems = document.querySelectorAll(".accordion__item");

  // 1. Selecionar cada item
  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".accordion__header");

    // 2. Seleccionar cada click del header
    accordionHeader.addEventListener("click", () => {
      // 7. Crear la variable
      const openItem = document.querySelector(".accordion-open");

      // 5. Llamar a la funcion toggle item
      toggleItem(item);

      // 8. Validar si existe la clase
      if (openItem && openItem !== item) {
        toggleItem(openItem);
      }
    });
  });

  // 3. Crear una funcion tipo constante
  const toggleItem = (item) => {
    // 3.1 Crear la variable
    const accordionContent = item.querySelector(".accordion__content");

    // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
    if (item.classList.contains("accordion-open")) {
      accordionContent.removeAttribute("style");
      item.classList.remove("accordion-open");
    } else {
      // 4. Agregar el height maximo del content
      accordionContent.style.height = accordionContent.scrollHeight + "px";
      item.classList.add("accordion-open");
    }
  };

  return (
    <>
      <section className="accordion container">
        <div className="accordion__container">
          <div className="accordion__item">
            <img src="/images/borders/left.png" className="top-border" />

            <header className="accordion__header">
              <i className="bx bxs-tree accordion__icon" />
              <h4 className="accordion__title">What are the pre-requisites?</h4>
            </header>
            <div className="accordion__content">
              <p className="accordion__description">
             There are absolutely no pre-requisites for this contest, everything will be taught from the basics and a doubt solving group will also be provided for a complete learning

              </p>
            </div>
          </div>
          <div className="accordion__item">
          <img src="/images/borders/right.png" className="top-border" />

            <header className="accordion__header">
              <i className="bx bxs-tree accordion__icon" />
              <h4 className="accordion__title">
              What is React Drift?
              </h4>
            </header>
            <div className="accordion__content">
              <p className="accordion__description">
              React Drift is a series of development contests, where participants will be learning the framework or library and then build projects based on that newly acquired skill.
              </p>
            </div>
          </div>
          <div className="accordion__item">
          <img src="/images/borders/left.png" className="top-border" />

            <header className="accordion__header">
              <i className="bx bxs-tree accordion__icon" />
              <h4 className="accordion__title">
              Why should I participate?
              </h4>
            </header>
            <div className="accordion__content">
              <p className="accordion__description">
              Participating in React Drift will help you learn a lot of new skills, which will open a lot of opportunities for various internships and placements.
              </p>
            </div>
          </div>
          <div className="accordion__item">
          <img src="/images/borders/right.png" className="top-border" />

            <header className="accordion__header">
              <i className="bx bxs-tree accordion__icon" />
              <h4 className="accordion__title">
              Where can I ask doubts?
              </h4>
            </header>
            <div className="accordion__content">
              <p className="accordion__description">
              All the participants will be added to a whatsapp group made for clearing all kinds of doubts and providing a better learning experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
