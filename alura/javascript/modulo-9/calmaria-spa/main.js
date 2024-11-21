let ultimoElementoFocado;

function gerenciarFocoModal(modal) {
  const elementosModal = modal.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const primeiroElemento = elementosModal[0];
  const ultimoElemento = elementosModal[elementosModal.length - 1];

  primeiroElemento.focus();

  modal.addEventListener("keydown", (evento) => {
    if (evento.key === "Tab") {
      if (evento.shiftKey) {
        if (document.activeElement === primeiroElemento) {
          evento.preventDefault();
          ultimoElemento.focus();
        }
      } else {
        if (document.activeElement === ultimoElemento) {
          evento.preventDefault();
          primeiroElemento.focus();
        }
      }
    }
  });
}

function alternarModal(id, abrir) {
  const modal = document.querySelector(`#${id}`);

  if (abrir) {
    ultimoElementoFocado = document.activeElement;

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    gerenciarFocoModal(modal)
  } else {
    modal.style.display = "none";
    document.body.style.overflow = "auto";

    ultimoElementoFocado && ultimoElementoFocado.focus();
  }
}

function alternarSubmenu(item, mostrar) {
  const submenu = item.querySelector(".submenu");

  if (submenu) {
    submenu.style.display = mostrar ? "block" : "none";

    const menuItem = item.querySelector(".cabecalho__lista-item a");

    menuItem.setAttribute("aria-expanded", mostrar);

    const dropdownExpandedIcon = item.querySelector(
      ".material-symbols-outlined.icone"
    );
    dropdownExpandedIcon.classList.toggle("active", mostrar);
  }
}

document.addEventListener("keydown", (evento) => {
  if (evento.key == "Escape") {
    alternarModal("ver-modal-inscrito", false);
    alternarModal('ver-modal-contato', false);
    alternarModal('ver-modal-enviado', false)

    document.querySelectorAll(".cabecalho__lista-item").forEach((item) => {
      alternarSubmenu(item, false);
    });
  }
});

document.querySelectorAll(".cabecalho__lista-item").forEach((item) => {
  item.addEventListener("mouseover", () => alternarSubmenu(item, true));

  item.addEventListener("mouseout", () => alternarSubmenu(item, false));

  item.addEventListener("click", () => {
    const submenu = item.querySelector(".submenu");

    const isDisplayed = submenu.style.display === "block";

    alternarSubmenu(item, !isDisplayed);
  });
});

function fecharAbrirAcordeao(button, abrir) {
  const classeExpandido = "expandido";
  const content = button.nextElementSibling;

  if (abrir) {
    content.classList.add(classeExpandido);
  } else {
    content.classList.remove(classeExpandido);
  }

  button.setAttribute("aria-expanded", abrir);
  content.setAttribute("aria-hidden", !abrir);
};

function alternarAcordeao(button) {
  const abrir = button.getAttribute("aria-expanded") === "false";
  document.querySelectorAll(".botao-acordeao").forEach(btn => {
    fecharAbrirAcordeao(btn, btn == button ? abrir : false);
  });
};

document.querySelectorAll(".botao-acordeao").forEach(button => {
  button.addEventListener("click",() => alternarAcordeao(button));
});
