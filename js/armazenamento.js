function salvarPreferenciaAjuda(ajuda) {
  const preferencia = {
    ajuda: ajuda
  };

  localStorage.setItem(
    "preferencia-ajuda",
    JSON.stringify(preferencia)
  );
}

function recuperarPreferenciaAjuda() {
  const salvo = localStorage.getItem("preferencia-ajuda");

  if (!salvo) {
    return "";
  }

  try {
    const preferencia = JSON.parse(salvo);
    return preferencia?.ajuda || "";
  } catch {
    return "";
  }
}