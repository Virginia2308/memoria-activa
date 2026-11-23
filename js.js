document.addEventListener("DOMContentLoaded", function () {
  const inputUsuario = document.getElementById("texto-tarjeta");
  const botonGenerar = document.getElementById("btn-generar-tarjeta");
  const contenedorResultado = document.getElementById("resultado-tarjeta");

  botonGenerar.addEventListener("click", function () {
    const fraseIngresada = inputUsuario.value;
    if (fraseIngresada.trim() !== "") {
      const tarjetaHTML = `
                <div class="card mt-4 border-left border-5 border-dark shadow-sm">
                    <div class="card-body">
                        <p class="text-muted small m-0">Memoria Activa — 50 Años</p>
                        <h5 class="card-title display-6 fw-semibold my-2">“${fraseIngresada}”</h5>
                        <p class="text-secondary m-0">Nunca Más — Memoria, Verdad y Justicia</p>
                    </div>
                </div>
            `;
      contenedorResultado.innerHTML = tarjetaHTML;
      inputUsuario.value = "";
    } else {
      alert("Por favor, escriba una frase o nombre para la tarjeta.");
      inputUsuario.focus();
    }
  });
});
